/*
* Account Container
*/ 

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';
import SubPage from '../../components/Manager/SubPage';
import AccountDetails from '../../components/Manager/AccountDetails';

class Account extends React.PureComponent {
    render(){
        const { user, accountChange, updateProfile } = this.props
        return (
            <div className='account'>
                <SubPage title={`Account Details`} isMenueOpen={null}>
                    <AccountDetails 
                        user={user}
                        accountChange={accountChange}
                        updateProfile={updateProfile}
                    />
                </SubPage>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.account.user,
        //resetFormData: state.resetPassword.resetFormData,
        //formErrors: state.resetPassword.formErrors
    }
}

export default connect(mapStateToProps, actions)(Account);