/*
* Cart actions
*/ 

import { push } from "connected-react-router";
import { success } from 'react-notification-system-redux';
import axios from "axios";

import {
    HANDLE_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    HANDLE_CART_TOTAL,
    SET_CART_ID,
    CLEAR_CART
} from './constants';

// import Product Constants here...

import {CART_ITEMS, CART_TOTAL, CART_ID} from '../../constants';
import handleError from "../../utils/error";
// import {} from utils/validation?
import { toggleCart } from "../Navigation/actions";

// Handle Add to Cart
export const handleAddToCart = product => {
    alert('Add To Cart Action');
    return (dispatch, getState) => {
        product.quantity = Numer(getState().product.productShopData.quantity);
        product.totalPrice = product.quantity * product.price;
        product.totalPrice = parseFloat(product.totalPrice.toFixed(2));
        const inventory = getState().product.storeProduct.inventory;

        const result = calculatePurchaseQuantity(inventory);

        const rules = {
            quantity: `min:1|max:${result}`
        }

        const { isValid, errors } = allFieldsVAlidations(product, rules, {
            'min.quantity': 'Quantity must be at least 1.',
            'min.quantity': `Quantity may not be greater than ${result}`
        });

        if(!isValid) {
            return dispatch({type: SET_PRODUCT_SHOP_FORM_ERRORS, payload: errors})
        }
    }
}