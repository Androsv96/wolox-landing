import { createSelector } from "reselect";

export const techsSelector = (state) => state.techsReducer.techs;
export const loadingSelector = (state) => state.techsReducer.isLoading;
export const errorLoadingSelector = (state) => state.techsReducer.errorLoading;
export const techToFindSelector = (state) => state.techsReducer.techToFind;
export const techTypeSelector = (state) => state.techsReducer.techType;
export const orderBySelector = (state) => state.techsReducer.orderBy;
export const favouritesTechsCounterSelector = (state) => state.techsReducer.favouritesTechsCounter;

export const filterTechs = createSelector(
    [techsSelector, techToFindSelector, techTypeSelector,],
    (techs, techToFind, techType,) => {

        const techNameReg = new RegExp(techToFind.toLowerCase());
        const techTypeReg = new RegExp(techType.toLowerCase());

        techs = techs.filter(data => techNameReg.test(data.tech.toLowerCase()) && techTypeReg.test(data.type.toLowerCase()));

        return techs;
    }
);

export const sortTechs = createSelector(
    [filterTechs, orderBySelector],
    (filteredTechs, orderBy) => {

        if (orderBy === "ASC") {
            filteredTechs.sort((a, b) => {

                if (a.tech.toLowerCase() > b.tech.toLowerCase()) return 1;
                else if (b.tech.toLowerCase() > a.tech.toLowerCase()) return -1;
                else return 0;
            });
        }
        else {
            filteredTechs.sort((a, b) => {
                if (a.tech.toLowerCase() > b.tech.toLowerCase()) return -1;
                else if (b.tech.toLowerCase() > a.tech.toLowerCase()) return 1;
                else return 0;
            });
        }

        return filteredTechs.slice(); //slice needed so view is rendered again

    }
);