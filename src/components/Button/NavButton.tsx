import React, { useState, useEffect, useContext } from 'react';
import { INavButton } from '../../utils/interface.util';
import { Link, useLocation } from 'react-router-dom';

const NavButton = (props: INavButton) => {

    const {icon, text, link} = props

    const location = useLocation()
    const path = location.pathname.split('/')[1]
    const currentLoc = link?.split('/')[1]


    useEffect(() => {
    }, []);

    return (
        <>
            <Link className={`link ${path === currentLoc && "active"}`} to={link!}><img src={icon} alt="" /> {text}</Link>
        </>
    );
};

export default NavButton;