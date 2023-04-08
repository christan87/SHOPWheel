/*
* App.js
*/ 

import React from "react";
import { Provider } from "react";
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';
import { SocketProvider } from './contexts/Socket';
import { SET_AUTH } from "./containers/Authentication/constants";
import Application from './containers/Application';
import ScollToTop from './scrollToTop';
import setToken from './utils/token';

// Import application sass styles
import './styles/style.scss';

// Import Font Awesome Icon set
import 'font-awesome/css/font-awesome.min.css';

// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';

// react-bootstrap-table2 styles
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// rc-slider style
import 'rc-slider/assets/index.css';
import { Provider } from "react-redux";

// Authentication
const token = localStorage.getItem('token');

if(token) { 
  // authentication api authorization
  setToken(token);

  // authentication routes
  store.dispatch({ type: SET_AUTH });
}

const App = () => {
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <SocketProvider>
        <ScollToTop>
          <Application />
        </ScollToTop>
      </SocketProvider>
    </ConnectedRouter>
  </Provider>
}

export default App;
