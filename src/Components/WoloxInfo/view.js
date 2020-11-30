import React from "react";
import styles from "./style.module.scss";
import Button from "../Button/view";
import { WOLOX_TWITTER_URL } from "../../Utils/Constants";
import { useTranslation } from "react-i18next";

export default function WoloxInfo() {

	const { t, } = useTranslation();

	return (
		<div className={styles.work_on_wrapper}>
			<div className={styles.left_side}>

				<h2>
					<span className={styles.accent}>{t("wolox_info_followers_counter")} &nbsp;+&nbsp; </span>
					<span className={styles.blue}>Xoloxers</span>
				</h2>

				<div className={styles.social_media}>
					<div className={styles.twitter_logo}></div>
					<div className={`${styles.white} ${styles.small_font}`}>@Wollox</div>
				</div>

				<div>
					<Button onClick={() => window.open(WOLOX_TWITTER_URL)}> <span className={styles.white}>{t("wolox_info_follow_us")}</span></Button>
				</div>

			</div>
			<div className={styles.right_side}>
				<h2>{t("wolox_info_first")}</h2>
				<h2>
					<span className={styles.blue}>{t("wolox_info_second")} &nbsp;</span>
				</h2>
				<h2>{t("wolox_info_third")}</h2>
			</div>
		</div>
	);
}