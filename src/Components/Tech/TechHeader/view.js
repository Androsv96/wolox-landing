import React from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

export default function TechHeader() {

	const { t, } = useTranslation();

	return (
		<div className={styles.table_headers}>
			<div className={styles.header_item}>{"Logo"}</div>
			<div className={styles.header_item}>{t("techs.column_tech")}</div>
			<div className={styles.header_item}>{t("techs.column_year")}</div>
			<div className={styles.header_item}>{t("techs.column_author")}</div>
			<div className={styles.header_item}>{t("techs.column_license")}</div>
			<div className={styles.header_item}>{t("techs.column_language")}</div>
			<div className={styles.header_item}>{t("techs.column_type")}</div>
			<div className={styles.header_item}>{t("techs.column_favourite")}</div>
		</div>
	);
}