import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import { useLocation } from "react-router";
import Button from "../Button/view";
import { ROUTES, SCROLLABLE_SECTIONS, SPANISH_LANGUAGE_CODE, ENGLISH_LANGUAGE_CODE, CURRENT_LANGUAGES, } from "../../Utils/Constants";
import { useHistory } from "react-router-dom";
import { LOGOUT } from "../../Redux/Actions";
import { clearStorage } from "../../Utils/Functions";
import { useTranslation } from "react-i18next";

Header.propTypes = {
	userReducer: PropTypes.object.isRequired,
	techsReducer: PropTypes.object.isRequired,
	actionDispatcher: PropTypes.func.isRequired
};

export default function Header({ userReducer, techsReducer, actionDispatcher, }) {

	const { t, i18n } = useTranslation();

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
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	const handleLogout = () => {
		history.push(ROUTES.home);
		clearStorage();
		actionDispatcher(LOGOUT);
	};

	const handleChangeLanguage = () => {
		if (i18n.language.toLocaleLowerCase() === SPANISH_LANGUAGE_CODE) i18n.changeLanguage(ENGLISH_LANGUAGE_CODE);
		else i18n.changeLanguage(SPANISH_LANGUAGE_CODE);
	};

	return (
		<header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>

			<div className={styles.logo}></div>

			<nav className={styles.nav}>
				<ul>
					<li><a href={`${ROUTES.home}${SCROLLABLE_SECTIONS.greetings}`}>{t("header_first")}</a></li>
					<li><a href={`${ROUTES.home}${SCROLLABLE_SECTIONS.benefits}`}>{t("header_benefits")}</a></li>
					<li>
						{
							location.pathname === ROUTES.techs ? <Button onClick={() => handleLogout()}>{t("header_logout")}</Button>
								:
								location.pathname !== ROUTES.signup &&
								<Button onClick={() => history.push(ROUTES.signup)}>
									<span>{t(isLogged ? "header_login" : "header_signup")}</span>
								</Button>
						}

					</li>

					<li onClick={() => handleChangeLanguage()}>{CURRENT_LANGUAGES[i18n.language.toLocaleLowerCase() === SPANISH_LANGUAGE_CODE ? ENGLISH_LANGUAGE_CODE : SPANISH_LANGUAGE_CODE]}</li>

					{favouritesTechsCounter > 0 && <li>{`${t("header_favourites")} ${favouritesTechsCounter}`}</li>}
				</ul>
			</nav>

		</header>
	);
}