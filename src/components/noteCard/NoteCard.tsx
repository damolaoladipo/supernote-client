import React, { useState, useEffect, useContext } from 'react';
import { INoteCard, } from '../../utils/interface.util';
import { Link } from 'react-router-dom';

const NoteCard = (props: INoteCard) => {

    const {title, content, id, onDelete, onEdit} = props


    useEffect(() => {
    }, []);

    return (
        <>

<div className="note-card card mb-3 p-3">
      <div className="card-body">
        <Link to={`/note/${id}`} className="card-title-link">
          <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        </Link>

        <div className="note-card-actions d-flex justify-content-between">
          <Link  to={`/edit/${id}`}  className="btn btn-outline-success btn-sm" onClick={onEdit}>Edit</Link>
          <button className="btn btn-outline-danger btn-sm" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
           
        </>
    );
};

export default NoteCard;