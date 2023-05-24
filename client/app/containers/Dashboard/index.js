/*
*   Dashboard
*/ 

import React from 'react';

import { connect } from 'react-redux';
import actions from '../../actions';

class Dashboard extends React.PureComponent{
    render() {
        return (
            <h1>DASHBOARD</h1>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps, actions)(Dashboard);

