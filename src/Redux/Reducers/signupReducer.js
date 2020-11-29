import { SET_COUNTRY_SELECTED, SET_LOADING } from '../Actions';

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

        default:
            return state;
    }
}