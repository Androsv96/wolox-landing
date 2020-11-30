import React from "react";
import styles from "./style.module.scss";
import Button from "../Button/view";
import { WOLOX_WEB_PAGE } from "../../Utils/Constants";
import { useTranslation } from "react-i18next";

export default function Footer() {

	const { t, } = useTranslation();

	return (
		<footer id="footer" className={styles.footer}>
			<div>
				<h2>{t("footer_first")} &nbsp;<span className={styles.blue}>{t("footer_second")}</span></h2>
				<h3 className={styles.normal_weight}>{t("footer_third")}</h3>
				<Button border="contained" onClick={() => window.open(WOLOX_WEB_PAGE)}>{t("footer_fourth")}</Button>
			</div>

			<div className={styles.wolox_logo}></div>

		</footer>
	);
}