import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import MainReducer from './reducers/MainReducer'
import AppContainer from './AppContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();


const preloadedState = localStorage.submission ? JSON.parse(localStorage.submission) : undefined

const store = createStore(MainReducer, preloadedState, applyMiddleware(thunkMiddleware)) ;

ReactDOM.render(
 <Provider store={store}>
  <MuiThemeProvider>
    <AppContainer />
  </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);