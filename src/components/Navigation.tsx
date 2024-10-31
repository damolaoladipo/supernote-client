import React, { useState, useEffect, useContext } from 'react';
import NavButton from './button/NavButton';

const Navigation = () => {


    useEffect(() => {
    }, []);

    return (
        <>
        <div className='navigation'>
        <div className="nav">
          <NavButton text='Home' link='/dashboard' icon={'/assets/icons/dashboard.svg'} />
          <NavButton text='My Notes' icon='fe fe-home'/>
          <NavButton text='Favourite' icon='fe-home'/>
          

          <div className='mrgb10'></div>

          <NavButton text='Support' icon='fe-home'/>
          <NavButton text='Privacy Policy' icon='fe-home'/>
          <NavButton text='Settings' icon='fe-home'/>
                   
        </div>
        <button className='button logout'><img src='/assets/icons/logout.svg' alt="" /> Log Out</button>
      </div>
        </>
    );
};

export default Navigation;

