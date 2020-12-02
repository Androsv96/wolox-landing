import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import View from "./view";
import { actionDispatcher } from "../../Redux/Actions";
import { WithSuspense } from "../../Utils/WithSuspense";
import { isLoggedSelector } from "../../Redux/Reducers/UserReducer/selectors";

const mapStateToProps = (state) => ({
	isLogged: isLoggedSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ actionDispatcher }, dispatch);

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(View);

export default WithSuspense(AppContainer);