import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlighParse from 'autosuggest-highlight/parse';
import { 
    Container, 
    Row, 
    Col
} from 'reactstrap';

import actions from '../../actions';
import Button from '../../components/Common/Button';
import { BarsIcon } from '../../components/Common/Icon';

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
        <Container>
            <Row className='align-items-center top-header'>
                <Col
                    xs={{ size: 12, order: 1}}
                    sm={{ size: 12, order: 1}}
                    md={{ size: 3, order: 1}}
                    lg={{ size: 3, order: 1}}
                    className='pr-0'
                >
                    <div className='brand'>
                        {/* {categories && categories.length > 0 &&} */ true && (
                            <Button
                                borderless
                                variant='empty'
                                className='d-none d-md-block'
                                ariaLabel='open the menu'
                                icon={ <BarsIcon /> }
                                onClick={() => alert('Clicked!')}
                            />
                        )}
                        <Link to='/'>
                            <h1 className='logo'>SHOP Wheel</h1>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
      </header>
    )
  }
}

const mapStateToProps = state => {
    return {
    }
};

export default connect(mapStateToProps, actions)(withRouter(Navigation));