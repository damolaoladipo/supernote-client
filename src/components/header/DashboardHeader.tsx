import React, { useState, useEffect, useContext } from 'react';
import IconButton from '../button/IconButton';

const DashboardHeader = () => {
    useEffect(() => {
    }, []);

    return (
        <>
        
        <div className="header">

            <IconButton 
            icon={{
                    type: 'image',
                    url: 'images/assets/apple-logo.png',
                    name: 'apple logo'
            }} />

            <IconButton 
            icon={{
                    type: 'image',
                    url: 'images/assets/apple-logo.png',
                    name: 'apple logo'
            }} />

        </div>
        
        </>
    );
};

export default DashboardHeader;