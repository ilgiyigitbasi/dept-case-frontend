import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Menu from "../components/Menu"
import {useState} from "react";
import HeroSection from "../components/heroSection";
import FilterAndList from "../components/filterAndList";
import {CSSTransition} from "react-transition-group";



import ClientQuote from "../components/clientQuote";
import Clients from "../components/clients";
import Footer from "../components/footer";

export default function Home() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <Head>
                <title>DEPT &#174; Front-End Case</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/public/DEPTBlack.png"/>
            </Head>

            <main>


                <Header showMenu={() => setShowMenu(!showMenu)}/>
                <CSSTransition in={showMenu} timeout={300} classNames="animation" unmountOnExit><Menu
                    closeMenu={() => setShowMenu(false)}/></CSSTransition>

                <HeroSection/>
                <FilterAndList/>
                <ClientQuote/>
                <Clients/>


            </main>

            <footer className={styles.footer}>

                <Footer/>

            </footer>
        </div>
    )
}
