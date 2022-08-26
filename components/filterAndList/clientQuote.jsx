import React from 'react';
import Styles from '../../styles/clientQuote.module.css'

const ClientQuote = (props) => {
    return (
        <div className={Styles.mainContainer}>
            “{props?.subtitle}”
            <div className={Styles.subtitle}>{props?.client}</div>
        </div>
    );
};

export default ClientQuote;