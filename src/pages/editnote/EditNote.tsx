import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextInput from "../../components/input/TextInput";
import axios from "axios";
import { INote } from "../../utils/interface.util";
import SideMenu from "../../components/sidemenu/SideMenu";
import DashboardHeader from "../../components/header/DashboardHeader";
import Title from "../../components/title/Title";
import NoteCard from "../../components/noteCard/NoteCard";

const EditNote = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [note, setNote] = useState<INote | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/note/${id}`
        );
        setNote(response.data.data);
        console.log(setNote);
      } catch (err) {
        setError("Error fetching Note");
        console.error("Error fetching Note", err);
      }
    };
    if (id) fetchNote();
  }, [id]);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5001/api/note/${id}`, note);
      navigate("/dashboard");
    } catch (err) {
      setError("Error updating Note");
    }
  };

  if (!note) return <p>Loading...</p>;

  return (
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
                

                  <div className="container mt-5">
                    <div className="">
                      <div className="col-md-8 offset-md-1">
                        <h2 className="mb-4 brand-black">Edit Note</h2>
                        {error && <p className="text-danger">{error}</p>}
                        <div className="mb-3">
                          <label className="form-label brand-grey">Title</label>
                          <TextInput
                            type="text"
                            value={note.title}
                            onChange={(e) =>
                              setNote({ ...note, title: e.target.value })
                            }
                            className="form-control"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label brand-grey">
                            Content
                          </label>
                          <textarea
                            style={{ height: '300px', width: '1000px'}}  
                            className="form-control w-100" 
                            value={note.content}
                            onChange={(e) =>
                              setNote({ ...note, content: e.target.value })
                            }
                            
                          />
                        </div>
                        <button
                        className="btn mt-3"
                          onClick={handleSave}
                          style={{ backgroundColor: '#ff6f61', color: '#fff' }}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mrgb4"></div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
