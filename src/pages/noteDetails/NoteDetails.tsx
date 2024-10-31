import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const NoteDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '', content: '' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch the note details by ID when the component loads
    axios.get(`http://localhost:5001/api/note/${id}`)
      .then(response => {
        setNote({
          title: response.data.data.title,
          content: response.data.data.content
        });
      })
      .catch(error => console.error('Error fetching note:', error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5001/api/note/${id}`)
      .then(() => {
        console.log('Note deleted');
        setShowModal(false);
        navigate('/notes'); 
      })
      .catch(error => console.error('Error deleting note:', error));
  };

  return (
    <div className="note-details">
      <h5 className="card-title">{note.title}</h5>
      <p className="card-text">{note.content}</p>
      <div className="note-card-actions d-flex justify-content-between">
        <Link to={`/edit/${id}`} className="btn btn-outline-success btn-sm">Edit</Link>
        <button className="btn btn-outline-danger btn-sm" onClick={() => setShowModal(true)}>Delete</button>
      </div>

      {showModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this note?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>No</button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteDetails;
