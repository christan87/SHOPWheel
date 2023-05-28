/*
*   Account Actions
*/ 

import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
    ACCOUNT_CHANGE,
    FETCH_PROFILE,
    CLEAR_ACCOUNT,
    SET_PROFILE_LOADING
} from './constants';

import handleError from '../../utils/error';

//export const accountChange
//export const clearAccount
export const setProfileLoading = value => {
    return {
        type: SET_PROFILE_LOADING,
        payload: value
    }
};
export const fetchProfile = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setProfileLoading(true));
            const response = await axios.get('http://localhost:3000/api/user/');
            console.log(`=================> AccountActions/fetchProfile/response: ${response}`)
            dispatch({type: FETCH_PROFILE, payload: response.data.user});
        } catch (error) {
            console.log(`=================> AccountActions/fetchProfile/response: ERROR`)
            handleError(error, dispatch)
        } finally {
            dispatch(setProfileLoading(false));
        }
    };
};