/*
* error.js
* This is a generic error handler, it receives the error from the server and presents it as a popup
*/ 

import {error} from 'react-notification-system-redux';

// import { signOut } from '../containers/Login/actions';

const handleError = (err, dispatch, title= '') => {
    const unsuccessfulOptions = {
        title: `${title}`,
        message: ``,
        position: 'tr',
        autoDismiss: 1
    };

    if (err.response){
        if (err.response.status === 400) {
            unsuccessfulOptions.title = title ? title : 'Please Try Again!';
            unsuccessfulOptions.message = err.response.data.error;
            dispatch(error(unsuccessfulOptions));
        } else if (err.response.status === 404) {

        } else if (err.response.status === 401) {
            unsuccessfulOptions.message = 'Unauthorized Access! Please login again';
            // dispatch(singOut());
            dispatch(error(unsuccessfulOptions));
        } else if (err.response.status === 401) {
            unsuccessfulOptions.message = 'Forbidden! You are not allowed to access this resource.'
            dispatch(error(unsuccessfulOptions));
        }
    } else if (err.message) {
        unsuccessfulOptions.message = err.message;
        dispatch(error(unsuccessfulOptions));
    } else {
        // fallback
        unsuccessfulOptions.message = 'Your request could not be processed. Please try again.';
    }
};

export default handleError;