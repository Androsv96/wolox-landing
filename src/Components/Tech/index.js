import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import View from "./view";
import { actionDispatcher } from "../../Redux/Actions";

const mapStateToProps = ({ techsReducer, }) => ({
	techsReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({ actionDispatcher }, dispatch);

const TechContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(View);

export default TechContainer;