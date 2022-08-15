import React from 'react';
import Styles from '../styles/filterAndList.module.css'
import Image from "next/image";

const FilterAndList = () => {
    let fakeJson = [
        {
            title: 'BOL.COM',
            subtitle: 'A Summer island in the Netherlands',
            imageUrl: '/image4.png'
        },
        {
            title: 'KEMPEN',
            subtitle: 'Not some average banking website',
            imageUrl: '/image5.png'
        }, {
            title: 'PHILIPS',
            subtitle: 'Beautiful design meets innovative technology',
            imageUrl: '/image6.png'
        }, {
            title: 'GEMEENTEMUSEUM',
            subtitle: 'A 100 years of Mondriaan & De Stijl',
            imageUrl: '/image7.png'
        }, {
            title: 'KEMPEN',
            subtitle: 'Not some average banking website',
            imageUrl: '/image5.png'
        }, {
            title: 'KEMPEN',
            subtitle: 'Not some average banking website',
            imageUrl: '/image5.png'
        }
    ]
    return (
        <>
            <div className={Styles.mainContainer}>
                <div>
                    <span>Show Me </span>
                    <select className={Styles.customSelect}>
                        <option>all Work</option>
                        <option>Fashion</option>
                        <option>Technology</option>
                    </select>
                </div>

                <div>
                    <span>in </span>
                    <select className={Styles.customSelect}>
                        <option>All industires</option>
                        <option>Technology</option>
                        <option>Fashion</option>
                    </select>

                </div>
            </div>
            <div className={Styles.list}>
                {fakeJson.map((item) => <div key={item.title} className={Styles.listItem} style={{
                    backgroundImage: `url(${item.imageUrl})`,
                }}>

                    <div style={{fontSize: '1.4em'}}>
                        <div style={{fontSize: '0.5em'}}>{item.title}</div>
                        {item.subtitle}
                        <div style={{fontSize: '0.5em'}}><Image src="/Group17.png" width={10} height={10} alt=""/> Read More</div>
                    </div>


                </div>)}
            </div>
        </>
    );
};

export default FilterAndList;