/*
* Login Actions
*/ 

import { success } from "react-notification-system-redux";
import axios from "axios";
import { push } from 'connected-react-router';

import{
    LOGIN_CHANGE,
    LOGIN_RESET,
    SET_LOGIN_LOADING,
    SET_LOGIN_FORM_ERRORS,
    SET_LOGIN_SUBMITTING
} from './constants';

import { setAuth, clearAuth } from '../Authentication/actions';
import setToken from '../../utils/token';
import handleError from "../../utils/error";

export const loginChange = (name, value) => {
    let formData = {};
    formData[name] = value;

    return {
        type: LOGIN_CHANGE,
        payload: formData
    };
};