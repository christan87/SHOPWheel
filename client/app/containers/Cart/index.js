/*
* Cart
*/ 

import React from "react";
import { connect } from "react-redux";

import actions from '../../actions';

import CartList from '../../components/Store/CartList'
import CartSummary from '../../components/Store/CartSummary'
import Checkout from '../../components/Store/Checkout'
import { BagIcon, CloseIcon } from "../../components/Common/Icon";
import Button from "../../components/Common/Button";

class Cart extends React.PureComponent {
    render() {
        const {
            isCartOpen,
            cartItems,
            cartTotal,
            toggleCart,
            handleShopping,
            handleCheckout,
            handleRemoveFromCart,
            placeHolder,
            authenticated
        } = this.props;

        return (
            <div className="cart">
                <div className="cart-header">
                    {isCartOpen && (
                        <Button 
                            borderless
                            variant='empty'
                            ariaLabel='close the cart'
                            icon={<CloseIcon />}
                            onClick={toggleCart}
                        />
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {

};

export default connect(mapStateToProps, actions)(Cart)
