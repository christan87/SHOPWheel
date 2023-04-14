import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { 
    Container, 
    Row, 
    Col
} from 'reactstrap';

import actions from '../../actions';

class Navigation extends React.PureComponent {
  render() {
    const {

    } = this.props;

    return (
      <header className='header fixed-mobile-header'>
        <div className='header-info'>
            <Container>
                <Row>
                    <Col md='4' className='text-center d-none d-md-block'>
                        <i className='fa fa-truck' />
                        <span>Free Shipping</span>
                    </Col>
                    <Col md='4' className='text-center d-none d-md-block'>
                        <i className='fa fa-credit-card' />
                        <span>Payment Methods</span>
                    </Col>
                    <Col md='4' className='text-center d-none d-md-block'>
                        <i className='fa fa-phone' />
                        <span>Call us 800-987-7654</span>
                    </Col>
                    <Col xs='12' className='text-center d-block d-md-none'>
                        <i className='fa fa-phone' />
                        <span>Need Help? Call us 800-987-7654</span>
                    </Col>
                </Row>
            </Container>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => {
    return {
    }
};

export default connect(mapStateToProps, actions)(withRouter(Navigation));