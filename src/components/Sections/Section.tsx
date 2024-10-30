import React, { useState, useEffect, useContext } from 'react';
import Button from '../button/Button';
import Title from '../title/Title';

const Section = () => {

    const [click, setClick] = useState()



    useEffect(() => {
    }, []);

    return (
        <>

        <div>
        <section className="hero-section bcg-color">
            <div className="hero-content">
                <div className="column-2">
                    <div className="hero-image">
                        <img id="heroImage" src={`${process.env.PUBLIC_URL}/images/assets/write.png`} alt="note-taking" />
                    </div>
                </div>

                <div className="column-1">
                    <div className="hero-text">
                        <Title text='Write Notes'/>
                        <p>Write any notes you want.</p>
                        <button className="button nav-signup">Try Now</button>
                    </div>
    
                </div>
            </div>
        </section>
        </div>
           

        </>
    );
};

export default Section;