import React from 'react';
import Styles from '../styles/clientQuote.module.css'

const ClientQuote = () => {
    return (
        <div className={Styles.mainContainer}>
            “Dept helped us tell our story through a bold new identity and a robust online experience.
            To the tone of 60% growth in online bookings in just one month”
            <div className={Styles.subtitle}>MATTIJS TEN DRINK - CEO, TRANSAVIA</div>
        </div>
    );
};

export default ClientQuote;