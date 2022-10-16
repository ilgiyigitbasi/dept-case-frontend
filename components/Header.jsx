import React, {useCallback, useEffect, useState} from 'react';
import Image from "next/image";
import Styles from "../styles/Header.module.css"

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);

        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
};


const Header = (props) => {
    const isBreakpoints = useMediaQuery(768)
    const menuItems = ['Work', 'Culture', 'Services', 'Insights', 'Careers', 'Contacts']
    return (
        <>
        { isBreakpoints  ? <div className={Styles.responsiveMenu}> <Image src="/DEPTBlack.png" alt="" height={10} width={75}/> <div onClick={props.showMenu}>Menu</div> </div> :  (<div className={Styles.main}>
                <Image src="/DEPTWhite.png" alt="" height={25} width={88.04}/>
                <div className={Styles.menuItems}>
                    {menuItems.map((name)=> <span className={Styles.item} key={name}>{name}</span>)}
                    <Image alt="menu" onClick={props.showMenu} src={'/Vector (1).png'} height={8} width={30.4}/>
                </div>
            </div>)
        }
        </>

    );
};

export default Header;