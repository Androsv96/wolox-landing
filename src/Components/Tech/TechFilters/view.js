import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import { SET_TECH_TO_FIND, SET_TECH_TYPE_SELECTED, SET_TECH_ORDER_SELECTED } from "../../../Redux/Actions";
import { useTranslation } from "react-i18next";

TechFilters.propTypes = {
	actionDispatcher: PropTypes.func.isRequired
};

export default function TechFilters({ actionDispatcher }) {

	const { t, } = useTranslation();

	return (
		<>
			<input placeholder={t("techs.filter_name")} className={styles.filters} onChange={(e) => actionDispatcher(SET_TECH_TO_FIND, e.currentTarget.value)} />

			<select className={styles.filters} onChange={(e) => actionDispatcher(SET_TECH_TYPE_SELECTED, e.currentTarget.value)}>
				<option value="">{t("techs.filter_type")}</option>
				<option value="Back-End">Back-End</option>
				<option value="Front-End">Front-End</option>
				<option value="Mobile">Mobile</option>
			</select>

			<select className={styles.filters} onChange={(e) => actionDispatcher(SET_TECH_ORDER_SELECTED, e.currentTarget.value)}>
				<option value="ASC">{t("techs.filter_order_asc")}</option>
				<option value="DESC">{t("techs.filter_order_desc")}</option>
			</select>
		</>
	);
}