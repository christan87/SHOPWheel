/*
* reducers.js
* reducers configuration
*/ 

// import dependencies
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as notifications } from 'react-notification-system-redux';

// import reducers

import applicationReducer from './containers/Application/reducer';
import authenticationReducer from './containers/Authentication/reducer';
import homepageReducer from './containers/Homepage/reducer';
import navigationReducer from "./containers/Navigation/reducer";
import navigationMenuReducer from "./containers/NavigationMenu/reducer";
import newsletterReducer from './containers/Newsletter/reducer';
import loginReducer from "./containers/Login/reducer";
import accountReducer from "./containers/Account/reducer";
import dashboardReducer from "./containers/Dashboard/reducer";
import resetPasswordReducer from "./containers/ResetPassword/reducer";
import addressReducer from "./containers/Address/reducer";

const createReducer = history => 
    combineReducers({
        router: connectRouter(history),
        notifications,
        application: applicationReducer,
        homepage: homepageReducer,
        authentication: authenticationReducer,
        navigation: navigationReducer,
        menu: navigationMenuReducer,
        newsletter: newsletterReducer,
        login: loginReducer,
        account: accountReducer,
        dashboard: dashboardReducer,
        resetPassword: resetPasswordReducer,
        address: addressReducer

    });

export default createReducer;