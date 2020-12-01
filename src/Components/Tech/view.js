import PropTypes from "prop-types";
import React, { useEffect } from "react";
import styles from "./style.module.scss";
import TechFilters from "./TechFilters/view";
import TechHeader from "./TechHeader/view";
import TechRows from "./TechRows/view";
import TotalTechsCounter from "./TotalTechsCounter/view";
import Loading from "../Loading/view";
import { GET_TECHS_BEGIN, TECH_SET_LOADING, SET_TECH_ERROR, GET_TECHS_SUCCESS, SET_FAVOURITES_TECHS_COUNTER, } from "../../Redux/Actions";
import { filterTechs, getTechs, countFavouritesTechs } from "../../Utils/Functions";
import { useTranslation } from "react-i18next";

Tech.propTypes = {
	techsReducer: PropTypes.object.isRequired,
	actionDispatcher: PropTypes.func.isRequired
};

export default function Tech({ techsReducer, actionDispatcher, }) {

	const { t, } = useTranslation();

	const { techs, isLoading, errorLoading, techToFind, techType, orderBy, } = techsReducer;

	const filteredTechs = filterTechs(techs, techToFind, techType, orderBy);

	useEffect(() => {
		const storageTechs = getTechs();

		if (techs.length === 0 && storageTechs.length === 0) actionDispatcher(GET_TECHS_BEGIN);

		else if (techs.length === 0 && storageTechs.length > 0) {
			const currentCount = countFavouritesTechs(storageTechs);
			actionDispatcher(GET_TECHS_SUCCESS, storageTechs);
			actionDispatcher(SET_FAVOURITES_TECHS_COUNTER, currentCount);
		}
	}, [techs, actionDispatcher]);

	useEffect(() => {
		if (errorLoading) {
			actionDispatcher(TECH_SET_LOADING, false);
			actionDispatcher(SET_TECH_ERROR, false);
		}
	}, [errorLoading, actionDispatcher]);

	return (
		<div className={styles.tech_section}>

			<h2 data-testid="tech_title">{t("techs_firts")}</h2>

			{
				isLoading ? <Loading />
					:
					<>
						<div className={styles.filter_section}>
							<TechFilters actionDispatcher={actionDispatcher} />
						</div>

						<div className={styles.table_section}>
							<TechHeader />
							<TechRows techs={filteredTechs} actionDispatcher={actionDispatcher} />
							<TotalTechsCounter totalTechCounter={filteredTechs.length} />
						</div>
					</>
			}
		</div>
	);
}