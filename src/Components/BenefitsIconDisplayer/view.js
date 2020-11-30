import React from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

BenefitsIconDisplayer.propTypes = {
	icon: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

export default function BenefitsIconDisplayer({ icon, label }) {

	return (
		<div className={styles.wrapper}>
			<img src={icon} alt={label} className={styles.img}></img>
			<label>{label}</label>
		</div>
	);
}