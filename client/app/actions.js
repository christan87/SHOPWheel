/*
* actions.js
* actions config
*/ 

import { bindActionCreators } from 'redux';

import * as application from './containers/Application/actions';
import * as authentication from './containers/Authentication/actions';
import * as homepage from './containers/Homepage/actions';
import * as navigation from './containers/Navigation/actions';

export default function (dispatch) {
    return bindActionCreators(
        {
            ...application,
            ...authentication,
            ...homepage,
            ...navigation
        },
        dispatch
    );
}