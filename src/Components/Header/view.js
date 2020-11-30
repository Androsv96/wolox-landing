import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { useLocation } from 'react-router';
import Button from '../Button/view';
import { ROUTES, SCROLLABLE_SECTIONS } from '../../Utils/Constants';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from '../../Redux/Actions';
import { clearStorage } from '../../Utils/Functions';

export default function Header({ userReducer, techsReducer, actionDispatcher, }) {

    const history = useHistory();
    const location = useLocation();

    const { isLogged } = userReducer;
    const { favouritesTechsCounter } = techsReducer;
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    const handleLogout = () => {
        history.push(ROUTES.home);
        clearStorage();
        actionDispatcher(LOGOUT);
    }

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>

            <div className={styles.logo}></div>

            <nav className={styles.nav}>
                <ul>
                    <li><a href={`${ROUTES.home}${SCROLLABLE_SECTIONS.greetings}`}>Home</a></li>
                    <li><a href={`${ROUTES.home}${SCROLLABLE_SECTIONS.benefits}`}>Beneficios</a></li>
                    <li>
                        {
                            location.pathname === ROUTES.techs ? <Button onClick={() => handleLogout()}>Logout</Button>
                                :
                                location.pathname !== ROUTES.signup && <Button onClick={() => history.push(ROUTES.signup)}><span>{isLogged ? "Login" : "Sign up"}</span></Button>
                        }

                    </li>
                    {favouritesTechsCounter > 0 && <li>{`Likes ${favouritesTechsCounter}`}</li>}
                </ul>
            </nav>

        </header>
    );
}