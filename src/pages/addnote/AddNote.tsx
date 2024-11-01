import React, { useState, useEffect } from 'react';
import { INote, IUser } from '../../utils/interface.util';
import { Link, useNavigate } from 'react-router-dom';
import SideMenu from '../../components/sidemenu/SideMenu';
import DashboardHeader from '../../components/header/DashboardHeader';
import axios from 'axios';
import Title from '../../components/title/Title';

const AddNote = (props: INote) => {
    const { _id, content, title, createdAt, updatedAt } = props;
    const [titles, setTitles] = useState<string>('');
    const [contents, setContents] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>(''); // State for error message
    const navigate = useNavigate();

    useEffect(() => {}, []);

    const createdUsers:IUser[] = []

    const handleSave = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const userId = createdUsers[1]?._id;
        
        try {
            const response = await axios.post<INote>('http://localhost:5001/api/note', {
                title: titles,
                content: contents,
                userId: userId,
            });

            console.log('Note created:', response.data);
            navigate('/dashboard');
        } catch (error) {
            // Enhanced error handling
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
                                        <div className="d-flex flex-column align-items-start header content title">
                                            <Title text="Welcome back, Damola!" size="fs-32" />
                                        </div>
                                        <div className="header content sub-text">
                                            <p className="fs-18 brand gray font-dmsans">What do you plan to do today?</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="add-note">
                                    <h3>Add New Note</h3>
                                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Display error message */}
                                    <form onSubmit={handleSave}>
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={titles}
                                                onChange={(e) => setTitles(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Content</label>
                                            <textarea
                                                className="form-control"
                                                value={contents}
                                                onChange={(e) => setContents(e.target.value)}
                                                required
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Save Note</button>
                                    </form>
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
