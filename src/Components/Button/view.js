import React from "react";
import styles from "./style.module.scss";

export default function Button({ border = "outlined", ...props }) {

	return <button className={`${styles.button} ${styles[border]}`}  {...props} />;

}