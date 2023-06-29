import React from "react";
import { connect } from "react-redux";

import actions from "../../actions";

class Address extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Address {`app>containers>Address>index.js`}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps, actions)(Address)