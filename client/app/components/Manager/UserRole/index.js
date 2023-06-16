/*
* UserRole
*/ 

import React from 'react';
import { ROLES } from '../../../constants';
import Badge from '../../Common/Badge';

const UserRole = props => {
    const { className, user } = props;
    return (
        <>
            {user.role === ROLES.Admin ? (
                <Badge variant='primary' className={className}>
                    Admin
                </Badge>
            ) : (<><h1>Admin Support Only for UserRole Component...</h1></>)
        }
        </>
    )
}

UserRole.defaultProps = {
    className: ''
}

export default UserRole;