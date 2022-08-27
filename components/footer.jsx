import React from 'react';
import Styles from "../styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
    const menuItems = ['Work', 'Culture', 'Services', 'Insights', 'Careers', 'Contacts']
    const socialMediaIcons = ['/facebook.png',  '/twitter.png','/instagram.png',]
    return (
        <>
            <div className={Styles.mainContainer}>
            <div className={Styles.firstRow}>
               <div className={Styles.menu}> <Image className={Styles.logo} src="/DEPTWhite.png" alt="dept" height={25} width={88.04}/>
                   <div className={Styles.menuItems}> {menuItems.map((name)=> <span className={Styles.item} key={name}>{name.toUpperCase()}</span>)}</div>

               </div>

                <div className={Styles.socialMediaIcons}>
                    {socialMediaIcons.map((icon)=> <img alt="" style={{marginLeft: '10px'}} key={icon} src={icon} height={15}/>)}
                </div>


            </div>
                <div className={Styles.secondRow}>
                    <div>
                        <span>Chamber of Commerce: 63464101  </span>
                        <span>VAT: NL 8552.47.502.B01 </span>
                        <span>Terms and conditions  </span>
                    </div>

                    <div style={{textAlign:'end'}}>© 2022 Dept Agency</div>
                </div>
            </div>
        </>
    );
};

export default Footer;