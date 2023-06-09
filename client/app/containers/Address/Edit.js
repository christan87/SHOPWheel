/*
* Edit Address
*/

import React from "react";
import { connect } from "react-redux";

import actions from "../../actions";

import EditAddress from "../../components/Manager/EditAddress";
import SubPage from "../../components/Manager/SubPage";
import NotFound from "../../components/Common/NotFound";

class Edit extends React.PureComponent {
    componentDidMount(){
        const addressId = this.props.match.params.id;
        this.props.fetchAddress(addressId);
    }
    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id){
            const addressId = this.props.match.params.id;
            this.props.fetchAddress(addressId);
        }
    }
    render(){
        const {
            history,
            address,
            addressEditChange,
            formErrors,
            updateAddress,
            deleteAddress,
            defaultChange
        } = this.props
        
        return(
            <SubPage
                title='Edit Address'
                actionTitle='Cancel'
                handleAction={() => history.goBack()}
            >
                {/* 
                    ======Render Error caused by ' address& address._id ? '======
                    By checking for 'address !== null', you can ensure that the
                    "address" prop has been assigned before rendering the 
                    EditAddress component. This way, it will wait for the 
                    prop to be available and prevent any potential errors 
                    related to accessing properties on an undefined or null value.
                */}
                
                {address !== null && address._id ? (
                    <EditAddress 
                        address={address}
                        addressChange={addressEditChange}
                        formErrors={formErrors}
                        updateAddress={updateAddress}
                        deleteAddress={deleteAddress}
                        defaultChange={defaultChange}
                    />
                ) : (
                    <NotFound message='No address found.' />
                )}
            </SubPage>
        );
    }
}

const mapStateToProps = state => {
    return {
        address: state.address.address,
        formErrors: state.address.editFormErrors
    };
};

export default connect(mapStateToProps, actions)(Edit);