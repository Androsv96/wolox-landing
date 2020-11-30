import { SIGNUP_USER_SUCCESS, LOGOUT } from "../Actions";

const initialState = {
	isLogged: false,
};

export default function UserReducer(state = initialState, action) {
	switch (action.type) {

	case SIGNUP_USER_SUCCESS:
		return {
			...state,
			isLogged: true,
		};

	case LOGOUT:
		return {
			...state,
			isLogged: false,
		};

	default:
		return state;
	}
}