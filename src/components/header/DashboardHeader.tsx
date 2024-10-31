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
                    url: 'images/assets/share.png',
                    name: 'share'
            }} />
            
            <IconButton 
            icon={{
                    type: 'image',
                    url:`images/assets/notification.png`,
                    name: 'notification'
            }} />


            <IconButton 
            icon={{
                    type: 'image',
                    url: 'images/assets/damola-.png',
                    name: 'profile'
            }} />

        </div>
        
        </>
    );
};

export default DashboardHeader;