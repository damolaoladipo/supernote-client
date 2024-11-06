import React, { useState, useEffect } from 'react';
import { INote, IUser } from '../../utils/interface.util';
import { Link, useNavigate } from 'react-router-dom';
import SideMenu from '../../components/sidemenu/SideMenu';
import DashboardHeader from '../../components/header/DashboardHeader';
import axios from 'axios';
import Title from '../../components/title/Title';
import NoteCard from '../../components/noteCard/NoteCard';

const AddNote = (props: INote) => {
    const { _id, content, title, createdAt, updatedAt } = props;

    const [titles, setTitles] = useState<string>('');
    const [contents, setContents] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [notes, setNotes] = useState<INote[]>([]);
    const navigate = useNavigate();

    useEffect(() => {

        
    }, []);

    
    const handleSave = async (event: React.FormEvent) => {
        event.preventDefault();
     
        const userId = "67246aacc974a4cdb67b913f";
        
        const notePayload = {
            title: titles,
            content: contents,
            userId: userId,
        };
        
        console.log('Sending note payload:', notePayload);
    
        try {
            const response = await axios.post<INote>('http://localhost:5001/api/note', notePayload);
    
            console.log('Note created:', response.data);
            navigate('/dashboard');
        } catch (error) {
            
            if (axios.isAxiosError(error)) {
                const errorResponse = error.response;
                if (errorResponse) {
                    console.error('Error creating note:', errorResponse.data);
                    setErrorMessage(errorResponse.data.message || 'An error occurred while creating the note.');
                } else {
                    console.error('Error creating note:', error.message);
                    setErrorMessage('Network error: Please check your connection.');
                }
            } else {
                console.error('Unexpected error:', error);
                setErrorMessage('An unexpected error occurred.');
            }
        }
    };
    
    return (
        <>

<div className="dashboard container">
                <div className="dashboard container-inner">

                    <div className="dashboard pair left">
                        <SideMenu />
                    </div>

                    <div className="dashboard pair right">
                        <div className="content-area">

                            <div className="content-area top">
                                <DashboardHeader />
                            </div>

                            <div className="content-area bottom">
                                <div className="header">
                                    <div className="header content">

                                    <>
        <div className="note-list">
            {notes.map((note: INote) => (
                <NoteCard 
                key={note._id} 
                id={note._id} 
                title={note.title} 
                content={note.content} 
                />
            ))}
        </div>
    </>

                                        <div className="add-note">
    <h3>Add New Note</h3>
    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    <form onSubmit={handleSave}>
        <div className="form-group">
            <label>Title</label>
            <input
                type="text"
                className="form-control w-100" 
                value={titles}
                onChange={(e) => setTitles(e.target.value)}
                required
            />
        </div>
        <div className="form-group mt-3"> 
            <label>Content</label>
            <textarea
                className="form-control w-100"  // Full width for textarea
                style={{ height: '300px', width: '1000px'}}  
                value={contents}
                onChange={(e) => setContents(e.target.value)}
                required
            ></textarea>
        </div>
        <button
            type="submit"
            className="btn mt-3"
            style={{ backgroundColor: '#ff6f61', color: '#fff' }}  // Use your brand color here
        >
            Save Note
        </button>
    </form>
</div>

                            </div>

                            
                            <div className="mrgb4"></div>

 

                        </div>
                    </div>
                </div>
            </div>

            </div>
            </div>

           
        </>
    );
};

export default AddNote;
