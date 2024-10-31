import React, { useState, useEffect, useContext } from 'react';
import NavButton from './button/NavButton';

const Navigation = () => {


    useEffect(() => {
    }, []);

    return (
        <>
        <div className='navigation'>
        <div className="nav">
          <NavButton text='Home' link='/dashboard' icon={'images/feather-white/home.svg'} />
          <NavButton text='My Notes' link='' icon={'images/feather-white/file-text.svg'} />
          <NavButton text='Favourite' link='' icon={'images/feather-white/star.svg'} />
          <NavButton text='' link='' icon={''} />

          

          <div className='mrgb40'></div>

         

          <NavButton text='Support' link='' icon={'images/feather-white/help-circle.svg'}/>
          <NavButton text='Privacy Policy' link='' icon={'images/feather-white/shield.svg'}/>
          <NavButton text='Settings' link='' icon={'images/feather-white/settings.svg'}/>
                   
        </div>
        <button className='button logout'><img src='/assets/icons/logout.svg' alt="" /> Log Out</button>
      </div>
        </>
    );
};

export default Navigation;

