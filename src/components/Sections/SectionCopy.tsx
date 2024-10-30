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
        <section className="hero-section">
            <div className="hero-content">
                <div className="column-1">
                    <div className="hero-text">
                        <Title text='Plan your day'/>
                        <p>Make sure to plan your day.</p>
                        <button className="button nav-signup">Try Now</button>
                    </div>
    
                </div>

                <div className="column-2">
                    <div className="hero-image">
                        <img id="heroImage" src={`${process.env.PUBLIC_URL}/images/assets/facts.png`} alt="facts" />
                    </div>
                </div>
            </div>
        </section>
        </div>
           

        </>
    );
};

export default Section;