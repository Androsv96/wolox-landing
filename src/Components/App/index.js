import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import View from './view';
import { actionDispatcher } from '../../Redux/Actions';
import { WithSuspense } from '../../Utils/WithSuspense';

const mapStateToProps = ({ userReducer }) => ({
    userReducer,
})

const mapDispatchToProps = dispatch => bindActionCreators({ actionDispatcher }, dispatch);

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default WithSuspense(AppContainer);