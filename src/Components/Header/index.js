import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import View from "./view";
import { actionDispatcher } from "../../Redux/Actions";
import { isLoggedSelector } from "../../Redux/Reducers/UserReducer/selectors";
import { favouritesTechsCounterSelector, } from "../../Redux/Reducers/Techsreducer/selectors";

const mapStateToProps = (state,) => ({
	isLogged: isLoggedSelector(state),
	favouritesTechsCounter: favouritesTechsCounterSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({ actionDispatcher }, dispatch);

const HeaderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(View);

export default HeaderContainer;