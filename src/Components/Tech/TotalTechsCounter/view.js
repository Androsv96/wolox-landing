import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

TotalTechsCounter.propTypes = {
	totalTechCounter: PropTypes.number.isRequired,
};

export default function TotalTechsCounter({ totalTechCounter }) {

	const { t, } = useTranslation();

	return (
		<div className={styles.wrapper}>{`${t("techs.total_techs")} ${totalTechCounter}`}</div>
	);
}