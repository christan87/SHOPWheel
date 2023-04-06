/*
* reducers.js
* reducers configuration
*/ 

// import dependencies
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as notifications } from 'react-notification-system-redux';

// import reducers

const createReducer = history => 
    combineReducers({
        router: connectRouter(history),
        notifications
    });

export default createReducer;