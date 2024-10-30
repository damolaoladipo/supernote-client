import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    useEffect(() => {
    }, []);

  return (
    <div>
      <header>
        <nav>
          <a className="logo" href="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/assets/supernote.png`}
              width="200"
              alt="supernote logo"
            />
          </a>
          <div className="navigation">
            <a href="/moviedetails.html">Feature</a>
            <a href="/tvshows">Pricing</a>
            <a href="#top">Discover</a>
            <a href="#top">About</a>
            <a href="#top">More</a>
          </div>
          <div className="actions">
            <button className="button nav-signup">Sign Up</button>
            <Link to="/login" className="button nav-login ">Login</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
