import { SET_COUNTRY_SELECTED, SET_LOADING, LOGOUT, } from '../Actions';

const initialState = {
    selectedCountry: "",
    isLoading: false,
};

export default function SignupReducer(state = initialState, action) {

    switch (action.type) {

        case SET_COUNTRY_SELECTED:
            return {
                ...state,
                selectedCountry: action.payload,
            }

        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        case LOGOUT:
            return {
                ...initialState
            }

        default:
            return state;
    }
}