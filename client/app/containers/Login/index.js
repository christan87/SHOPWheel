import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// dont forget to add the actions from this dir to the referenced actions file
import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import SignupProvider from '../../components/Common/SignupProvider';

class Login extends React.PureComponent {
    
    render() {
        const {} = this.props;
        return (
            <div className='login-form'>
                <h2>Login Form</h2>
                <hr />
                <form onSubmit={()=> alert('Form Submitted')}>
                    <Row>
                        <Col
                            xs={{size: 12, order: 2}}
                            md={{size: 6, order: 1}}
                            className='p-0'
                        >
                            <Col xs='12' md='12' >
                                <Input 
                                    type={'text'}
                                    //error={{}}
                                    label={'Email Adress'}
                                    name={'email'}
                                    placeholder={'Email...'}
                                    value={{}}
                                    onInputChange={(name, value) => {
                                        //some function??
                                    }}
                                />
                            </Col>
                            <Col xs='12' md='12' >
                                <Input 
                                    type={'password'}
                                    //error={{}}
                                    label={'Password'}
                                    name={'password'}
                                    placeholder={'Password...'}
                                    value={{}}
                                    onInputChange={(name, value) => {
                                        //some function??
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
                    <div className='d-flex flex-column flex-md-row align-items-md-center justify-conent-between'>
                        <div>
                            <Button 
                                type='submit'
                                variant='primary'
                                text='Login'
                                disabled={false}
                            />
                        </div>
                        <Button 
                            variant='link'
                            text='Create an Account'
                            onClick={()=>alert('Create an Account Clicked!')}
                        />
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

    };
};

export default connect(mapStateToProps, actions)(Login)
