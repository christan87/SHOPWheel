/*
* actions.js
* actions config
*/ 

import { bindActionCreators } from 'redux';

import * as application from './containers/Application/actions';
import * as authentication from './containers/Authentication/actions';

export default function (dispatch) {
    return (
        {
            ...application,
            ...authentication
        },
        dispatch
    );
}