import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Button from '../Button/view';
import { ROUTES, SCROLLABLE_SECTIONS } from '../../Utils/Constants';
import { useHistory } from 'react-router-dom';

export default function Header() {

    const history = useHistory();
    const [test, setTest] = useState("not");

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setTest("scrolled")
        } else {
            setTest("not")
        }
    }

    return (
        <header className={`${styles.header} ${test === "scrolled" ? styles.scrolled : ""}`}>

            <div className={styles.logo}></div>

            <nav className={styles.nav}>
                <ul>
                    <li><a href={`${ROUTES.home}${SCROLLABLE_SECTIONS.greetings}`}>Home</a></li>
                    <li><a href={`${ROUTES.home}${SCROLLABLE_SECTIONS.benefits}`}>Beneficios</a></li>
                    <li>
                        <Button onClick={() => history.push(ROUTES.signup)}><span>Sign up</span></Button>
                    </li>
                </ul>
            </nav>

        </header>
    );
}