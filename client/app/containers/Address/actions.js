/*
* Address actions
*/

import { goBack } from "connected-react-router";
import { success } from "react-notification-system-redux";
import axios from "axios";

import {
    FETCH_ADDRESS,
    FETCH_ADDRESSES,
    ADDRESS_CHANGE,
    ADDRESS_EDIT_CHANGE,
    SET_ADDRESS_FORM_ERRORS,
    SET_ADDRESS_FORM_EDIT_ERRORS,
    RESET_ADDRESS,
    ADD_ADDRESS,
    REMOVE_ADDRESS,
    SET_ADDRESS_LOANDING,
    ADDRESS_SELECT
} from './constants';

import handleError from "../../utils/error";
import { allFieldsValidation } from "../../utils/validation";

export const addressChange = (name, value) => {
    let formData = {};
    formData[name] = value;

    return {
        type: ADDRESS_CHANGE,
        payload: formData
    };
};

export const addressEditChange = (name, value) => {
    let formData = {};
    formData[name] = value;

    return {
        type: ADDRESS_EDIT_CHANGE,
        payload: formData
    };
};

export const handleAddressSelect = value => {
    return {
        type: ADDRESS_SELECT,
        payload: value 
    };
};

export const setAddressLoading = value => {
    return {
        type: SET_ADDRESS_LOANDING,
        payload: value 
    };
};

export const fetchAddresses = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setAddressLoading(true));
            const response = await axios.get(`/api/address`);
            dispatch({ type: FETCH_ADDRESSES, payload: response.data.addresses });
        } catch (error) {
            handleError(error, dispatch);
        } finally {
            dispatch(setAddressLoading(false));
        }
    }
}

export const fetchAddress = addressId => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(`/api/address/${addressId}`);

            dispatch({
                type: FETCH_ADDRESS,
                payload: response.data.address
            });

        } catch (error) {
            handleError(error, dispatch);
        }
    };
};

