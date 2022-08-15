import React from 'react';
import Styles from "../styles/Header.module.css"

function Menu(props) {
    let menuItems = ['Home', 'Werk', 'Over', 'Diensten', 'Partners', 'Stories', 'Vacatures', 'Events', 'Contact']
    return (
        <div className={Styles.menuMain}>

            <div className={Styles.menuHeader}><img src={"/DEPTWhite.png"} alt="dept" height={25}/>

                <img src="/close.png"
                     onClick={props.closeMenu}
                     style={{cursor: 'pointer'}}
                     alt="close"
                     height={20}/></div>

            {menuItems.map((item) => <div className={Styles.menuItemsBig} key={item}>
                <img alt="icon" src={"/Polygon5.png"}/> {item}
            </div>)}
        </div>
    );
}

export default Menu;