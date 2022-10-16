import React, {useEffect, useState} from 'react';
import Styles from '../../styles/filterAndList.module.css'
import ClientCard from "./clientCard";
import ScaledCard from "./scaledCard";
import mockData from "../../mock/gridMockData.json"
import ClientQuote from "./clientQuote";
import ListView from "./listView";

const FilterAndList = () => {
    const [industry, setIndustry] = useState('');
    const [filterNumber, setFilterNumber] = useState(0);
    const [mockDataFiltered, setMockDataFiltered] = useState([]);
    const [isViewGrid, setIsViewGrid] = useState(true)

    useEffect(() => {

        if (industry !== '' && filterNumber !== 0) {
            setMockDataFiltered(mockData.filter((i) => i.type === 'list').filter((k) => k.industry === industry).splice(0, filterNumber))
        } else if (industry !== '' && filterNumber === 0) {
            setMockDataFiltered(mockData.filter((i) => i.industry === industry))
        } else if (filterNumber > 0 && industry === '') {
            setMockDataFiltered(mockData.filter((i) => i.type === 'list').splice(0, filterNumber))
        } else {
            setMockDataFiltered(mockData)
        }

    }, [filterNumber, industry]);


    function showCards(item) {
        if (item.type === 'list') {
            return <ClientCard {...item}/>
        } else if (item.type === 'quote') {
            return <ClientQuote {...item}/>
        } else {
            return <ScaledCard {...item}/>
        }
    }

    function handleChangeIndustry(e) {
        setIndustry(e.target.value)
    }

    function handChangeNumber(e) {
        setFilterNumber(e.target.value)
    }

    return (
        <>
            <div className={Styles.mainContainer}>
                <div>
                    <span>Show Me </span>
                    <select onChange={(e) => handChangeNumber(e)} className={Styles.customSelect}>
                        <option value={0}>all Work</option>
                        <option value={6}>1-6</option>
                        <option value={10}>1-12</option>
                    </select>
                </div>

                <div className={Styles.filterSection}>
                    <span>in </span>
                    <select onChange={(e) => handleChangeIndustry(e)} className={Styles.customSelect}>
                        <option value={''}>All Industries</option>
                        <option value={'tourism'}>Tourism</option>
                        <option value={'technology'}>Technology</option>
                        <option value={'other'}>Others</option>
                    </select>


                    <span className={Styles.asText}>as </span>
                    <span className={Styles.gridText} onClick={() => setIsViewGrid(!isViewGrid)}>{isViewGrid ?
                        'Grid' :
                        'List'
                    }</span>


                </div>

            </div>
            <div className={isViewGrid ? Styles.grid : ''}>
                {isViewGrid ? mockDataFiltered.map((item) => showCards(item)) :
                    mockDataFiltered.filter((i) => i.type === 'list').map((item) => <ListView
                        key={item.title} {...item}/>)
                }
            </div>

        </>
    );
};

export default FilterAndList;