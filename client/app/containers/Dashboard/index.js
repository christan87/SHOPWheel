/*
*   Dashboard
*/ 

import React from 'react';

import { connect } from 'react-redux';
import actions from '../../actions';
import { ROLES } from '../../constants';
import Admin from '../../components/Manager/Dashboard/Admin';

class Dashboard extends React.PureComponent{
    componentDidMount(){
        this.props.fetchProfile();
    }

    render() {
        const {
            user, 
            isLoading,
            isMenuOpen,
            toggleDashboardMenu
        } = this.props;
        return (
            <>
                {user.role === ROLES.Admin ?
                    <Admin 
                        user={user}
                        isMenuOpen={isMenuOpen}
                        links={{}}
                        toggleMenu={toggleDashboardMenu}
                    />
                    :
                    <><h1>userRole undefined</h1></>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.account.user,
        isLoading: state.account.isLoading,
        isMenuOpen: state.dashboard.isMenuOpen
    };
};

export default connect(mapStateToProps, actions)(Dashboard);

