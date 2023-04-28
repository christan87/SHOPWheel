/*
* Newsletter actions
*/ 

import { success } from "react-notification-system-redux";
import axios from "axios";

import {
    NEWSLETTER_CHANGE,
    SET_NEWSLETTER_FORM_ERRORS,
    NEWSLETTER_RESET
} from './constants';

import handleError from "../../utils/error";
// import field validations...

export const newsLetterChange = (name, value) => {
    return {
        type: NEWSLETTER_CHANGE,
        payload: value
    };
};

export const subscribeToNewsletter = () => {
    // fill in once server created!
};