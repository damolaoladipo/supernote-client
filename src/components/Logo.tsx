import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {


    useEffect(() => {
    }, []);

    return (
        <>

        <div className="flex items-center justify-between">
        <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/assets/supernote-white.png`} width={180} alt="supernote" />
            </Link>
        </div>

        </>
    );
};

export default Logo;