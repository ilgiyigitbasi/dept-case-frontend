import React from 'react';
import Styles from '../../styles/filterAndList.module.css'
import ClientCard from "./clientCard";
import ScaledCard from "./scaledCard";
import mockData from "../../mock/gridMockData.json"
import ClientQuote from "./clientQuote";

const FilterAndList = () => {

    function showCards(item) {
        if (item.type === 'list') {
            return <ClientCard {...item}/>
        } else if(item.type === 'quote') {
            return <ClientQuote {...item}/>
        } else {
            return <ScaledCard {...item}/>
        }
    }

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

                <div >
                    <span>in </span>
                    <select className={Styles.customSelect}>
                        <option>All industires</option>
                        <option>Technology</option>
                        <option>Fashion</option>
                    </select>

                </div>
            </div>
            <div  className={Styles.list}>
                {mockData.map((item) => showCards(item))}
            </div>

        </>
    );
};

export default FilterAndList;