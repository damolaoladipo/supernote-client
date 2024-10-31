import React, { useState, useEffect, useContext } from 'react';
import { INote } from '../../utils/interface.util';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddNote = (props: INote) => {

    const {_id, content, title, createdAt, updatedAt} = props

    const [titles, setTitles] = useState<string>('');
    const [contents, setContents] = useState<string>('');
    const navigate = useNavigate()


    useEffect(() => {

    }, []);

    const handleSave = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
            const response = await axios.post<INote>('http://localhost:5001/api/note', {
                title,
                content,
            });

            console.log('Note created:', response.data);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error creating note:', error);
        }
    };

    return (
        <>
             <div className="add-note">
            <h3>Add New Note</h3>
            <form onSubmit={handleSave}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitles(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea
                        className="form-control"
                        value={content}
                        onChange={(e) => setContents(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Save Note</button>
            </form>
        </div>
        </>
    );
};

export default AddNote;