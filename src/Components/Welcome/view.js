import React from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

export default function Welcome() {

	const { t, } = useTranslation();

	return (
		<section className={styles.home_section} id="greetings">

			<div className={styles.left_side}>
				<div>
					<h2 className={styles.lighter}>{t("greetings.first")}</h2>
					<h2>
						<span className={styles.bold}>{t("greetings.second")} &nbsp;</span>
						<span className={styles.lighter}>{t("greetings.third")}</span>
					</h2>
					<h2 className={styles.accent}>Wolox</h2>
				</div>
			</div>

			<div className={styles.right_side}>
			</div>


		</section>
	);

}