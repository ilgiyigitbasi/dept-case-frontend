import React from 'react';
import Styles from "../styles/Hero.module.css"


const HeroSection = () => {
    return (
        <div className={Styles.main}>

            <div className={Styles.text}>
                <p>A selection of projects that <b>pioneer tech</b> and <b>marketing</b> to help brands stay ahead.</p>
            </div>

        </div>
    );
};

export default HeroSection;