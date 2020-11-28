import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Button from '../Button/view';

export default function Header() {

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
                    <li><a href="#greetings">Home</a></li>
                    <li><a href="#benefits">Beneficios</a></li>
                    <li>
                        <Button><span>Register</span></Button>
                    </li>
                </ul>
            </nav>

        </header>
    );
}