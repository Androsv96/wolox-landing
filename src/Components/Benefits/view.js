import React from "react";
import styles from "./style.module.scss";
import { BENEFITS } from "../../Utils/Constants";
import BenefitsIconDisplayer from "../BenefitsIconDisplayer/view";
import { useTranslation } from "react-i18next";

export default function Benefits() {

	const { t, } = useTranslation();

	return (
		<section id="benefits" className={styles.benefits}>
			<h3 >{t("benefits.first")} <span>{t("benefits.second")}</span></h3>
			<div className={styles.benefits_wapper}>
				{
					BENEFITS.map((obj, idx) => <BenefitsIconDisplayer icon={obj.icon} label={t(`benefits.hero${idx + 1}`)} key={obj.label} />)
				}
			</div>

		</section>
	);
}