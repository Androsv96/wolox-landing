import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import View from './view';
import { actionDispatcher } from '../../Redux/Actions';

const mapStateToProps = ({ userReducer, techsReducer, }) => ({
    userReducer, techsReducer,
})

const mapDispatchToProps = dispatch => bindActionCreators({ actionDispatcher }, dispatch);

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default HeaderContainer