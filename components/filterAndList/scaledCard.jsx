import React from 'react';
import Styles from "../../styles/filterAndList.module.css";
import Image from "next/image";

const scaledCard = (props) => {
    let item = props
    return (
        <>
            <div className={item.type === 'listRight' ? Styles.scaledRight : Styles.scaledLeft}>
                <div className={Styles.scaledCardMainSection}>
                    <div>
                        <div key={item.title} className={Styles.listItem} style={{
                            backgroundImage: `url(${item?.imageUrl})`,
                        }}>

                            <div style={{fontSize: '1.4em'}}>
                                <div style={{fontSize: '0.5em'}}>{item.title}</div>
                                {item?.subtitle}
                                <div style={{fontSize: '0.5em'}}><Image src="/Group17.png" width={10} height={10}
                                                                        alt=""/> Read
                                    More
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className={Styles.scaledCardImageSection}>
                        {item?.listSection?.map((listItem) => <div key={listItem.name}
                                                                   className={Styles.scaledCardListItem}>
                            <p>{listItem.title}</p>
                            <p>{listItem.description}</p>
                            <div style={{fontSize: '0.5em'}}><Image src="/Group17.png" width={10} height={10}
                                                                    alt=""/> &nbsp;  Read
                                More
                            </div>
                        </div>)}
                    </div>
                </div>

            </div>
        </>

    );
};

export default scaledCard;
