import { connect, } from "react-redux";
import { bindActionCreators } from "redux";
import View from "./view";
import { actionDispatcher } from "../../Redux/Actions";
import { techsSelector, sortTechs, loadingSelector, errorLoadingSelector } from "../../Redux/Reducers/Techsreducer/selectors";

const mapStateToProps = (store) => ({
	techs: techsSelector(store),
	techFiltered: sortTechs(store),
	isLoading: loadingSelector(store),
	errorLoading: errorLoadingSelector(store),
});

const mapDispatchToProps = dispatch => bindActionCreators({ actionDispatcher }, dispatch);

const TechContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(View);

export default TechContainer;