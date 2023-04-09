import React from "react";

import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";

import actions from "../../actions";

//routes
import HomePage from "../Homepage";

import Page404 from '../../components/Common/Page404';

class Application extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="application">
                <main className="main">
                    <Container>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path='/' component={HomePage} />
                                <Route path='/404' component={Page404} />
                                <Route path='*' component={Page404} />
                            </Switch>
                        </div>
                    </Container>
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, actions)(Application);