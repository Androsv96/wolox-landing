import React from "react";
import styles from "./style.module.scss";

export default function Loading() {
	return (
		<div className={styles.wrapper} data-testid="test_loading">
			<div className={styles.loader}></div>
		</div>
	);
}