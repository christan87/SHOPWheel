import React from 'react';

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// dont forget to add the actions from this dir to the referenced actions file
import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import SignupProvider from '../../components/Common/SignupProvider';

class Login extends React.PureComponent {
    
    render() {
        const {
            authenticated,
            loginFormData,
            loginChange,
            login,
            formErrors,
            isLoading,
            idSubmitting
        } = this.props;

        if(authenticated) return <Redirect to='/dashboard' />
        const handleSubmit = event => {
            event.preventDefault();
            login();
        }
        return (
            <div className='login-form'>
                <h2>Login Form</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col
                            xs={{size: 12, order: 2}}
                            md={{size: 6, order: 1}}
                            className='p-0'
                        >
                            <Col xs='12' md='12' >
                                <Input 
                                    type={'text'}
                                    error={formErrors['email']}
                                    label={'Email Adress'}
                                    name={'email'}
                                    placeholder={'Email...'}
                                    value={loginFormData.email}
                                    onInputChange={(name, value) => {
                                        loginChange(name, value)
                                    }}
                                />
                            </Col>
                            <Col xs='12' md='12' >
                                <Input 
                                    type={'password'}
                                    error={formErrors['password']}
                                    label={'Password'}
                                    name={'password'}
                                    placeholder={'Password...'}
                                    value={loginFormData.password}
                                    onInputChange={(name, value) => {
                                        loginChange(name, value)
                                    }}
                                />
                            </Col>
                        </Col>
                        <Col
                            xs={{size: 12, order: 1}}
                            md={{size: 6, order: 2}}
                            className='mb-2 mb-md-0'
                        >
                            <SignupProvider />
                        </Col>
                    </Row>
                    <hr />
                    <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-between'>
                        <div className='d-flex justify-content-between align-items-center mb-3 mb-md-0'>
                            <Button 
                                type='submit'
                                variant='primary'
                                text='Login'
                                disabled={false}
                            />
                            <Button 
                                variant='link'
                                text='Create an Account'
                                onClick={()=>alert('Create an Account Clicked!')}
                            />
                        </div>
                        <Link
                            className='redirect-link forgot-password-link'
                            to={'#/forgot-password'}
                        >
                            Forgot Password?
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.authentication.authenticated,
        loginFormData: state.login.loginFormData,
        formErrors: state.login.formErrors,
        isLoading: state.login.isLoading,
        isSubmitting: state.login.isSubmitting
    };
};

export default connect(mapStateToProps, actions)(Login)
