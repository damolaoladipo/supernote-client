import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextInput from '../../components/input/TextInput';
import axios from 'axios';
import { INote } from '../../utils/interface.util';

const EditNote = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [note, setNote] = useState<INote | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/note/${id}`);
                setNote(response.data.data);
                console.log(setNote)
            } catch (err) {
                setError('Error fetching Note');
                console.error('Error fetching Note', err);
            }
        };
        if (id) fetchNote();
        
    }, [id]);

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:5001/api/note/${id}`, note);
            navigate('/dashboard');
        } catch (err) {
            setError('Error updating Note');
        }
    };

    if (!note) return <p>Loading...</p>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className="mb-4 brand-black">Edit Note</h2>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="mb-3">
                        <label className="form-label brand-grey">Title</label>
                        <TextInput
                            type="text"
                            value={note.title}
                            onChange={(e) => setNote({ ...note, title: e.target.value })}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label brand-grey">Content</label>
                        <TextInput
                            type="textarea"
                            value={note.content}
                            onChange={(e) => setNote({ ...note, content: e.target.value })}
                            className="form-control"
                        />
                    </div>
                    <button onClick={handleSave} className="btn brand-orange text-white">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditNote;
