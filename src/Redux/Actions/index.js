export const SET_COUNTRY_SELECTED = "SET_COUNTRY_SELECTED";
export const LOGOUT = "LOGOUT";

export const SIGNUP_USER_BEGIN = "SIGNUP_USER_BEGIN";
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";

export const GET_TECHS_BEGIN = "GET_TECHS_BEGIN";
export const GET_TECHS_SUCCESS = "GET_TECHS_SUCCESS";

export const SET_LOADING = "SET_LOADING";
export const TECH_SET_LOADING = "TECH_SET_LOADING";

export const SET_HEADER_SCROLLED = "SET_HEADER_SCROLLED";

export const SET_NEW_ERROR = "SET_NEW_ERROR";


export const actionDispatcher = (action, payload) => ({
    type: action,
    payload
});