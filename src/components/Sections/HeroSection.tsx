import React from 'react';
import { Link } from 'react-router-dom';


const HeroSection: React.FC = () => {
    return (
        <div>
            <section className="hero-section">
            <div className="hero-content">
                <div className="column-1">
                    <div className="hero-text">
                        <h1>Note taking, made simple</h1>
                        <p>Passionately made by student and for student. The all in one note taking app. </p>
                        <Link to="/dashboard" className="button nav-signup">Try for free</Link>
                    </div>
    
                </div>
                <div className="column-2">
                    <div className="hero-image">
                        <img id="heroImage" src={`${process.env.PUBLIC_URL}/images/assets/notetaking.png`} alt="note-taking" />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default HeroSection;
