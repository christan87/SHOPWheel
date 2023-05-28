/*
* actions.js
* actions config
*/ 

import { bindActionCreators } from 'redux';

import * as application from './containers/Application/actions';
import * as authentication from './containers/Authentication/actions';
import * as homepage from './containers/Homepage/actions';
import * as navigation from './containers/Navigation/actions';
import * as newsletter from './containers/Newsletter/actions';
import * as login from './containers/Login/actions';
import * as account from './containers/Account/actions';
import * as dashboard from './containers/Dashboard/actions';
export default function (dispatch) {
    return bindActionCreators(
        {
            ...application,
            ...authentication,
            ...homepage,
            ...navigation,
            ...newsletter,
            ...login,
            ...account,
            ...dashboard
        },
        dispatch
    );
}