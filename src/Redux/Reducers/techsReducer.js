import { GET_TECHS_SUCCESS, TECH_SET_LOADING } from '../Actions';

const initialState = {
    techs: [],
    isLoading: false,
};

export default function TechsReducer(state = initialState, action) {
    switch (action.type) {

        case GET_TECHS_SUCCESS:
            return {
                ...state,
                techs: action.payload
            }

        case TECH_SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        default:
            return state;
    }
}