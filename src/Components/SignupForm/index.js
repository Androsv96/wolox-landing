import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import View from "./view";
import { actionDispatcher } from "../../Redux/Actions";

const mapStateToProps = ({ signupReducer }) => ({
	signupReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({ actionDispatcher }, dispatch);

const SignUpFormContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(View);

export default SignUpFormContainer;