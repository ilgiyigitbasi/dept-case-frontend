import React from 'react';
import Styles from '../../styles/filterAndList.module.css'
import Image from "next/image";

const ListView = (props) => {
    return (
        <>



                <div key={props.name} data-aos={'fade-up'}
                     className={Styles.scaledCardListItem}>
                    <p>{props.title}</p>
                    <p>{props.subtitle}</p>
                    <div style={{fontSize: '0.5em'}}><Image src="/Group17.png" width={10} height={10}
                                                            alt=""/> &nbsp;  Read
                        More
                    </div>
                </div>


        </>
    );
};

export default ListView;
