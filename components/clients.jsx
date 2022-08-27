import React from 'react';
import Styles from '../styles/clients.module.css'

const Clients = () => {
    const brandsList = [
        '/image64.png', '/image66.png', '/image68.png', '/image72.png', '/image74.png', '/image63.png', '/image65.png', '/image67.png',
        '/image71.png', '/image57.png', '/image58.png', '/image61.png'
    ]
    return (
        <>
            <div className={Styles.mainContainer}>
                <h3>Clients</h3>
                <p>We value a great working relationship with our clients above all else. It’s why they often come to
                    our parties. It’s also why we’re able to challenge and inspire
                    them to reach for the stars.</p>

                <div className={Styles.brandsList}>
                    {brandsList.map((item) => <div key={item}><img alt={item}
                        key={item} src={item} height={60}/></div>)}


                </div>
            </div>
        </>
    );
};

export default Clients;