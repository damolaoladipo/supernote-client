import React, { useState, useEffect, useContext } from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';

const SideMenu = () => {
    useEffect(() => {
    }, []);

    return (
        <> <div  className='sidenav'>
            <Logo/>
            <Navigation/>

        </div>
            
        </>
    );
};

export default SideMenu;