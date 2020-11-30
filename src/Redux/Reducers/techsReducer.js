import {
	GET_TECHS_SUCCESS, TECH_SET_LOADING, SET_TECH_TO_FIND, SET_TECH_ERROR, SET_TECH_TYPE_SELECTED, SET_TECH_ORDER_SELECTED,
	SET_FAVOURITES_TECHS_COUNTER, LOGOUT,
} from "../Actions";

const initialState = {
	techs: [],
	isLoading: false,
	techToFind: "",
	errorLoading: false,
	techType: "",
	orderBy: "ASC",
	favouritesTechsCounter: 0,
};

export default function TechsReducer(state = initialState, action) {
	switch (action.type) {

	case GET_TECHS_SUCCESS:
		return {
			...state,
			techs: action.payload
		};

	case TECH_SET_LOADING:
		return {
			...state,
			isLoading: action.payload
		};

	case SET_TECH_TO_FIND:
		return {
			...state,
			techToFind: action.payload
		};

	case SET_TECH_ERROR:
		return {
			...state,
			errorLoading: action.payload
		};

	case SET_TECH_TYPE_SELECTED:
		return {
			...state,
			techType: action.payload
		};

	case SET_TECH_ORDER_SELECTED:
		return {
			...state,
			orderBy: action.payload
		};

	case SET_FAVOURITES_TECHS_COUNTER:
		return {
			...state,
			favouritesTechsCounter: action.payload
		};

	case LOGOUT:
		return {
			...initialState
		};

	default:
		return state;
	}
}