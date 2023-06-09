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

export const addAddress = () => {
    return async (dispatch, getState) => {
        try {
            
            const rules = {
                address: 'required',
                city: 'required',
                state: 'required',
                country: 'required',
                zipCode: 'required|min:5'
            };

            const newAddress = getState().address.addressFormData;
            const isDefault = getState().address.isDefaultl;

            const { isValid, errors } = allFieldsValidation(newAddress, rules, {
               'address.required': 'Address is required',
                'city.required': 'City is required',
                'state.required': 'State is required',
                'country.required': 'Country is required',
                'zipCode.required': 'Zipcode is required'
            });

            if(!isValid){
                return dispatch({type: SET_ADDRESS_FORM_ERRORS, payload: errors});
            }

            const address = {
                isDefault,
                ...newAddress
            }

            const response = await axios.post(`/api/address/add`, address);
            const successfulOptions = {
                title: `${response.data.message}`,
                position: 'tr',
                autoDismiss: 1
            };

            if(response.data.success === true) {
                dispatch(success(successfulOptions));
                dispatch({
                    type: ADD_ADDRESS,
                    payload: response.data.address
                });
                dispatch(goBack());
                dispatch({ type: RESET_ADDRESS });
            }

        } catch (error) {
            handleError(error, dispatch);
        }
    }
};

export const updateAddress = () => {
    return async (dispatch, getState) => {
        try {
            const rules = {
                address: 'required',
                city: 'required',
                state: 'required',
                country: 'required',
                zipCode: 'required'
            };

            const newAddress = getState().address.address;

            const { isValid, errors } = allFieldsValidation(newAddress, rules, {
                'address.required': 'Address is required',
                 'city.required': 'City is required',
                 'state.required': 'State is required',
                 'country.required': 'Country is required',
                 'zipCode.required': 'Zipcode is required'
             });
             
             
            if(!isValid){
                return dispatch({type: SET_ADDRESS_FORM_EDIT_ERRORS, payload: errors});
            }

            const response = await axios.put(`/api/address/${newAddress._id}`, newAddress);

            const successfulOptions = {
                title: `${response.data.message}`,
                position: 'tr',
                autoDismiss: 1
            };

            if(response.data.success === true) {
                dispatch(success(successfulOptions));
                dispatch(goBack());
            }
        } catch (error) {
            handleError(error, dispatch);
        }
    };
};

export const deleteAddress = id => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.delete(`/api/address/delete/${id}`);

            const successfulOptions = {
                title: `${response.data.message}`,
                position: 'tr',
                autoDismiss: 1
            };

            if(response.data.success === true) {
                dispatch(success(successfulOptions));
                dispatch({
                    type: REMOVE_ADDRESS,
                    payload: id
                });
                dispatch(goBack());
            }
        } catch (error) {
            handleError(error, dispatch);
        }
    };
};
