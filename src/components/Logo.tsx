import React, { useState, useEffect, useContext } from 'react';

const Logo = () => {


    useEffect(() => {
    }, []);

    return (
        <>

        <div className="flex items-center justify-between">
            <img src={`${process.env.PUBLIC_URL}/images/assets/supernote-white.png`} width={180} alt="supernote" />

        </div>

        </>
    );
};

export default Logo;