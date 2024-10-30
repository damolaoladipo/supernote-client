import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditNote = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch note data by ID when the component loads
    axios.get(`http://localhost:5001/api/note/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch(error => {
        console.error('Error fetching note:', error);
      });
  }, [id]);

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Update note data in MongoDB
    axios.put(`http://localhost:5001/api/note/${id}`, { title, content })
      .then(response => {
        console.log('Note updated:', response.data);
        navigate(`/note/${id}`);
      })
      .catch(error => {
        console.error('Error updating note:', error);
      });
  };

  return (
    <div className="edit-note">
      <h3>Edit Note</h3>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditNote;
