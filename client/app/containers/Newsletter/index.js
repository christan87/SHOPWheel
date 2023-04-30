import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';

class Newsletter extends React.PureComponent {
    render(){
        const {email, formErrors, newsletterChange, subscribeToNewsletter} = this.props

        const handleSubmit = e => {
            e.preventDefault();
            subscribeToNewsletter();
        }
        return(
            <div className='newsletter-form'>
                <p>Sign Up for our Gangbusters Newsletter!</p>
                <form onSubmit={handleSubmit}>
                    <div className='subscribe'>
                        <Input 
                            type={'text'}
                            error={formErrors['email']}
                            name={'email'}
                            placeHolder={'Please Enter Your Email'}
                            value={email}
                            onInputChange={(name, value) => {newsletterChange(name, value)}}
                            inlineElement={SubscribeButton}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

const SubscribeButton = (
    <Button type='submit' vaariant='primary' text='Subscribe!' />
);

const mapStateToProps = state => {
    return {
        email: state.newsletter.email,
        formErrors: state.newsletter.formErrors
    };
};

export default connect(mapStateToProps, actions)(Newsletter)