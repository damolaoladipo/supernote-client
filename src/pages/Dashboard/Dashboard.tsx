import React, { useState, useEffect, useContext } from 'react';
import TextInput from '../../components/input/TextInput';
import Title from '../../components/title/Title';
import NoteCard from '../../components/noteCard/NoteCard';
import axios from 'axios';
import { INote} from '../../utils/interface.util';
import SideMenu from '../../components/sidemenu/SideMenu';
import DashboardHeader from '../../components/header/DashboardHeader';
import { Link } from 'react-router-dom';
import storage from '../../utils/storage.util';

const Dashboard = () => {

    const [search, setSearch] = useState<string>('')
    const [notes, setNotes] = useState([])
    const [error, setError] = useState<string | null>(null)
    const [tab, setTab] = useState<string>('signup')

    useEffect(() => {

        setDefaultTab()

        const getNotes = async () => {

        try {
            const response = await  axios.get('http://localhost:5001/api/notes')
            setNotes(Array.isArray(response.data.data) ? response.data.data : [])
        } catch (err) {
            setError("Error fetching Notes")
            console.error('Error fetching Notes', err)
            }  
        }

        getNotes()

    }, []);

    const setDefaultTab = ( ) => {
        const val = storage.fetchData('active-tab')

        if (val) {
            setTab(val.toString())
        }
    }


    const toggleTab = (e: any, tab: string) => {
        if (e) { e.preventDefault() }
        setTab(tab)
        storage.keepData('active-tab', tab)
    }


    return (
        <>
            <div className="dashboard container">

                <div className="dashboard container-inner">

                    <div className="dashboard pair left">
                        <SideMenu/>

                    </div>

                    <div className="dashboard pair right">

                        <div className="content-area">

                            <div className="content-area top">
                                <DashboardHeader />
                                
                            </div>

                            <div className="content-area bottom">


                                <div className="header">

                                    <div className="header content">

                                        <div className=" header content title">
                                            <Title text='Good Morning, Damola!' size='fs-32'/>
                                        </div>
                                                
                                        <div className=" header content sub-text">
                                            <p className='fs-18 brand gray font-dmsans'>What do you plan to do today?</p>
                                        </div>

                                    </div>

                                    <div className="header search">
                                        
                                        <TextInput type='text' onChange={(e) => {setSearch(e.target.value) }}/>

                                    </div>

                                </div>

                                {/* <div className="note-tab">
                                    <h2>Tables</h2>
                                    <h2>Cards</h2>
                                    <span>Icon</span>
                                    </div> */}
                                    <div className='form-tab inner'>
                                        <div className="inner">
                                        <Link onClick={(e) => toggleTab(e, 'login')} to="" className={`tab login fs-14 font-dmsans-medium ${tab === 'login' ? 'active' : ''}`}>Tables</Link>
                                        <span className="pdl"></span>
                                        <Link onClick={(e) => toggleTab(e, 'signup')} to="" className={`tab signup fs-14 font-dmsans-medium ${tab === 'signup' ? 'active' : ''}`}>Cards</Link>
                                        </div>
                                    </div>

                                    <div className="mrgb4"></div>

                                <div className="note-list">

                                    {error && <p>{error}</p>}
                                    
                                    {notes.map((note: INote) => (
                                        
                                        <NoteCard 
                                        key= {note._id}
                                        id={note._id}
                                        title={note.title}
                                        content={note.content}
                
                                        />
                                    ))}
                                </div>

                            </div>

                        </div>


                    </div>


                </div>


            </div>

        </>
    );
};

export default Dashboard;