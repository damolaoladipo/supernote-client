import React, { useState, useEffect, useContext } from 'react';
import TextInput from '../../components/input/TextInput';
import Title from '../../components/title/Title';
import NoteCard from '../../components/noteCard/NoteCard';
import axios from 'axios';
import { INote } from '../../utils/interface.util';
import SideMenu from '../../components/sidemenu/SideMenu';
import DashboardHeader from '../../components/header/DashboardHeader';
import { Link } from 'react-router-dom';
import storage from '../../utils/storage.util';
import { Table } from 'react-bootstrap';

const Dashboard = () => {
    const [search, setSearch] = useState<string>('');
    const [notes, setNotes] = useState<INote[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [tab, setTab] = useState<string>('cards');

    useEffect(() => {
        setDefaultTab();

        const getNotes = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/notes');
                setNotes(Array.isArray(response.data.data) ? response.data.data : []);
            } catch (err) {
                setError("Error fetching Notes");
                console.error('Error fetching Notes', err);
            }
        };

        getNotes();
    }, []);

    const setDefaultTab = () => {
        const val = storage.fetchData('active-tab');
        if (val) {
            setTab(val.toString());
        }
    };

    const toggleTab = (e: any, tab: string) => {
        if (e) e.preventDefault();
        setTab(tab);
        storage.keepData('active-tab', tab);
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

                                    <div className="mrgb4"></div>
                                    <div className="w-100 mt-3">
                                        <TextInput
                                            type="text"
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="form-control brand-grey"
                                            placeholder="Search notes..."
                                        />
                                    </div>
                                </div>

                                <div className="form-tab">
                                    <div className="inner">
                                        
                                        <Link
                                            onClick={(e) => toggleTab(e, 'cards')}
                                            to=""
                                            className={`tab cards fs-14 font-dmsans-medium ${tab === 'cards' ? 'active' : ''}`}
                                        >
                                            
                                        </Link>

                                        <span className="pdl"></span>

                                        <Link
                                            onClick={(e) => toggleTab(e, 'tables')}
                                            to=""
                                            className={`tab tables fs-14 font-dmsans-medium ${tab === 'tables' ? 'active' : ''}`}
                                        >
                                            
                                        </Link>


                                    </div>
                                </div>

                                <div className="d-flex justify-content-start mb-3 ">
                        <Link to="http://localhost:3000/note/add" className="btn btn-primary">
                            Add Note
                        </Link>
                    </div>


                                <div className="mrgb4"></div>

                                {tab === 'cards' && (
                                    <>
                                        <div className="note-list">
                                            {error && <p>{error}</p>}
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
                                )}

                                {tab === 'tables' && (
                                    <>
                                        <div className="note-table">
                                            {error && <p>{error}</p>}
                                            {notes.map((note: INote) => (
                                                <NoteCard 
                                                key={note._id} 
                                                id={note._id} 
                                                title={note.title} 
                                                content={note.content} />
                                            ))}
                                        </div>

                                        <div className="note-table">
                                            {error && <p className="text-danger">{error}</p>}
                                            <Table striped bordered hover responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Note ID</th>
                                                        <th>Title</th>
                                                        <th>Content</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {notes.map((note) => (
                                                        <tr key={note._id}>
                                                            <td>{note._id}</td>
                                                            <td>{note.title}</td>
                                                            <td>{note.content}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
