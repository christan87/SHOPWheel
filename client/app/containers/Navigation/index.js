import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, NavLink as ActiveLink } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import { 
    Container, 
    Row, 
    Col,
    Navbar,
    Nav,
    NavLink,
    UncontrolledDropdown,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem
} from 'reactstrap';

import actions from '../../actions';
import Button from '../../components/Common/Button';
import { BarsIcon } from '../../components/Common/Icon';
import CartIcon from '../../components/Common/CartIcon';
import MiniBrand from '../../components/Store/MiniBrand';
import Cart from '../Cart';

class Navigation extends React.PureComponent {
  render() {
    const {
        history,
        isMenuOpen,
        isCartOpen,
        isBrandOpen,
        toggleCart,
        toggleMenu
    } = this.props;

    // Must Change with Autosuggest!
    const inputProps = {
        placeholder: "Search Products...",
        value: '',
        onChange: ()=>{}
    }

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
                <Col
                    xs={{ size: 12, order: 4}}
                    sm={{ size: 12, order: 4}}
                    md={{ size: 12, order: 4}}
                    lg={{ size: 5, order: 2}}
                    className='pt-2 pt-lg-0'
                >
                    {/* NOT FINAL COMPONENT CONFIG! Must be updated after api server created */}
                    <Autosuggest 
                        suggestions={[]}
                        onSuggestionsFetchRequested={()=>{}}
                        onSuggestionsClearRequested={()=>{}}
                        getSuggestionValue={()=>{}}
                        renderSuggestion={()=>{}}
                        inputProps={inputProps}
                    />
                </Col>
                <Col
                    xs={{ size: 12, order: 2}}
                    sm={{ size: 12, order: 2}}
                    md={{ size: 4, order: 1}}
                    lg={{ size: 5, order: 3}}
                    className='desktop-hidden'
                >
                    <div className='header-links'>
                        <Button
                            borderless
                            variant='empty'
                            ariaLabel='open the menu'
                            icon={ <BarsIcon /> }
                            onClick={() => alert('Clicked!')}
                        />
                        <CartIcon cartItems={[]} onClick={toggleCart} />
                    </div>
                </Col>
                <Col
                    xs={{ size: 12, order: 2}}
                    sm={{ size: 12, order: 2}}
                    md={{ size: 9, order: 1}}
                    lg={{ size: 4, order: 3}}
                >
                    <Navbar color='light' light expand='md' className='mt-1 mt-md-0'>
                        <CartIcon 
                            className='d-none d-md-block'
                            cartItems={[]} 
                            onClick={toggleCart} 
                        />
                        <Nav navbar>
                            {/* {brands && brands.length} */}
                            {true &&(
                                <Dropdown
                                    nav
                                    inNavbar
                                    toggle={() => {alert('dropdown toggled')}}
                                    isOpen={false}
                                >
                                    <DropdownToggle nav>
                                        Brands
                                        <span className='fa fa-chevron-down dropdown-caret'></span>
                                    </DropdownToggle>
                                    <DropdownMenu right className='nav-brand-dropdown'>
                                        <div className='mini-brand'>
                                            <MiniBrand 
                                                brands={[{name: 'Common'}, {name: 'Delux'}, {name: 'Luxury'}]}
                                                toggleBrand={()=>{alert('mini-brand toggled')}}
                                            />
                                        </div>
                                    </DropdownMenu>
                                </Dropdown>
                            )}
                            <NavItem>
                                <NavLink
                                    tag={ActiveLink}
                                    to='/shop'
                                    activeClassName='active'
                                >
                                    Shop
                                </NavLink>
                            </NavItem>
                            {/* {authenticated ? (...)} */}
                            {false ? (
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        {/*user.firstName*/ false ? user.firstName : 'Welcome!'}
                                        <span className='fa fa-chevron-down dropdown-caret'></span>
                                    </DropdownToggle>
                                </UncontrolledDropdown>
                            ) : (
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        Welcome!
                                        <span className='fa fa-chevron-down dropdown-caret'></span> 
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem onClick={()=>{alert('Login Clicked')}}>
                                            Login
                                        </DropdownItem>
                                        <DropdownItem onClick={()=>{alert('Sign Up Clicked')}}>
                                            Sign Up in
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            )}
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
        {/* Hidden Cart Drawer */}
        <div
            className={isCartOpen ? 'mini-cart-open' : 'hidden-mini-cart'}
            aria-hidden={`${isCartOpen ? false : true}`}
        >
            <div className='mini-cart'>
                <Cart />
            </div>
            <div
                className={
                    isCartOpen ? 'drawer-backdrop dark-overflow' : 'drawe-backdrop'
                }
                onClick={toggleCart}
            />
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => {
    return {
        isMenuOpen: state.navigation.isMenuOpen,
        isCartOpen: state.navigation.isCartOpen,
        isBrandOpen: state.navigation.isBrandOpen,
    }
};

export default connect(mapStateToProps, actions)(withRouter(Navigation));