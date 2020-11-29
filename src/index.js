import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import AppContainer from './Components/App';
import { Provider } from "react-redux";
import configureStore from "./Redux/Store";
import rootSaga from "./Sagas";

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);