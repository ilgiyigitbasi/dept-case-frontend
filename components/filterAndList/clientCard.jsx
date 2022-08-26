import React from 'react';
import Styles from "../../styles/filterAndList.module.css";
import Image from "next/image";

const ClientCard = (props) => {
    let item = props
    return (
        <>

                <div key={item.title} className={Styles.listItem} style={{
                    background: `linear-gradient(358.53deg, rgba(0, 0, 0, 0.33) 1.79%, rgba(0, 0, 0, 0) 99.33%),url(${item.imageUrl})`

                }}>

                    <div style={{fontSize: '1.4em'}}>
                        <div style={{fontSize: '0.3em'}}>{item.title}</div>
                        {item.subtitle}
                        <div style={{fontSize: '0.3em'}}><Image src="/Group17.png" width={10} height={10} alt=""/> Read
                            More
                        </div>
                    </div>


                </div>
        </>
    );
};

export default ClientCard;
