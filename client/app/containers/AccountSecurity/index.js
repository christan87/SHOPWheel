/*
* AccountSecurity
*/

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import SubPage from '../../components/Manager/SubPage';
import ResetPasswordForm from '../../components/Common/ResetPasswordForm';

class AccountSecurity extends React.PureComponent {
    render(){
        return(
            <div className='account-security'>
                <SubPage title={'Account Security'} isMenuOpen={null}>
                    <div className='reset-form'>
                        <ResetPasswordForm />
                    </div>
                </SubPage>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{}
}

export default connect(mapStateToProps, actions)(AccountSecurity);