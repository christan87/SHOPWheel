/*
* Admin
*/ 

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import AccountMenu from '../AccountMenu'
import Page404 from '../../Common/Page404';
const Admin = props => {
    return (
        <div className='admin'>
            <Row>
                <Col>
                    <AccountMenu {...props} />
                </Col>
                <Col>
                    <div>
                        <Switch>
                            <Route path='*' component={Page404} />
                        </Switch>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Admin;