/*
* AccountDetails Component
*/ 

import React from 'react';

import { Row, Col } from 'reactstrap';
import { EMAIL_PROVIDER } from '../../../constants';
import UserRole from '../UserRole';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const AccountDetails = props => {
    const { user, accountChange, updateProfile } = props;

    const handleSubmit = event => {
        event.preventDefault();
        updateProfile();
    }

    return (
        <div>
            <h1>Account Details</h1>
        </div>
    )
}

export default AccountDetails;