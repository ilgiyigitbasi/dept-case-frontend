import React from 'react';
import Image from "next/image";
import Styles from "../styles/Header.module.css"

const Header = (props) => {
    let menuItems = ['Work', 'Culture', 'Services', 'Insights', 'Careers', 'Contacts']
    return (
        <div className={Styles.main}>
            <Image src="/DEPTWhite.png" alt="" height={25} width={88.04}/>
            <div className={Styles.menuItems}>
                {menuItems.map((name)=> <span className={Styles.item} key={name}>{name}</span>)}
                <Image alt="menu" onClick={props.showMenu} src={'/Vector (1).png'} height={8} width={30.4}/>
            </div>
        </div>
    );
};

export default Header;