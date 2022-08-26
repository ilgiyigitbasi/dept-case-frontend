import React from 'react';
import Styles from "../../styles/filterAndList.module.css";
import Image from "next/image";

const scaledCard = (props) => {
    let item = props
    return (
        <>
            <div style={item.type === 'listRight' ? {gridColumnStart: 1, gridColumnEnd: 3} : {
                gridColumnStart: 1,
                gridColumnEnd: 3,
                direction: 'rtl',
                textAlign: 'end'
            }}>
                <div style={{display: 'grid', gridTemplateColumns: '65% 35%'}}>
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
                    <div style={{display: 'grid', justifySelf: 'end'}}>
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
