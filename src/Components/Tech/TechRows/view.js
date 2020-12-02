import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import { saveTechs, countFavouritesTechs, } from "../../../Utils/Functions";
import { GET_TECHS_SUCCESS, SET_FAVOURITES_TECHS_COUNTER, } from "../../../Redux/Actions";

TechRows.propTypes = {
	techs: PropTypes.array.isRequired,
	actionDispatcher: PropTypes.func.isRequired
};

function TechRows({ techs, actionDispatcher }) {

	const onFavouriteTechSelected = (favouriteTechName, checked) => {

		//Counts favourites
		let currentCount = countFavouritesTechs(techs);
		currentCount = checked ? currentCount + 1 : currentCount - 1;
		actionDispatcher(SET_FAVOURITES_TECHS_COUNTER, currentCount);

		//Add checked to tech obj
		let index = techs.findIndex(data => data.tech.toLowerCase() === favouriteTechName.toLowerCase());
		let tempTechs = [...techs];

		tempTechs[index] = {
			...tempTechs[index],
			checked: tempTechs[index].checked ? !tempTechs[index].checked : true
		};
		actionDispatcher(GET_TECHS_SUCCESS, tempTechs);

		//Save techs in local storage 
		saveTechs(tempTechs);

	};

	return (
		techs?.map((data) =>
			<div className={styles.table_row} key={data.tech} data-testid="tech_rows">
				<div className={styles.tech_item}><img src={data.logo} alt={`${data.tech}Logo`} /></div>
				<div className={styles.tech_item}>{data.tech}</div>
				<div className={styles.tech_item}>{data.year}</div>
				<div className={styles.tech_item}>{data.author}</div>
				<div className={styles.tech_item}>{data.license}</div>
				<div className={styles.tech_item}>{data.language}</div>
				<div className={styles.tech_item}>{data.type}</div>
				<div className={styles.tech_item}>
					<input type="checkbox" checked={data.checked ? true : false} onChange={() => onFavouriteTechSelected(data.tech, data.checked ? false : true)} />
				</div>
			</div >
		)
	);
}

export default TechRows;

