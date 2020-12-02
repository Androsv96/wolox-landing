import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import View from "./view";
import { actionDispatcher } from "../../Redux/Actions";
import { selectedCountrySelector, isLoadingSelector } from "../../Redux/Reducers/SignupReducer/selectors";

const mapStateToProps = (state) => ({
	selectedCountry: selectedCountrySelector(state),
	isLoading: isLoadingSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ actionDispatcher }, dispatch);

const SignUpFormContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(View);

export default SignUpFormContainer;