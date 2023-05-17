import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

// dont forget to add the actions from this dir to the referenced actions file
import actions from '../../actions';

import Input from '../../components/Common/Input';

class Login extends React.PureComponent {
    
    render() {
        const {} = this.props;
        const removeStyle = {
            outline: 'red dashed 1px'
        };
        return (
            <div className='login-form'>
                <h2>Login Form</h2>
                <hr />
                <form onSubmit={()=> alert('Form Submitted')}>
                    <Row style={removeStyle} >
                        <Col style={removeStyle} >
                            <Col style={removeStyle} >
                                <Input 
                                    type={'text'}
                                    error={{}}
                                    label={'Email Adress'}
                                    name={'email'}
                                    placeholder={'Email...'}
                                    value={{}}
                                    onInputChange={(name, value) => {
                                        //some function??
                                    }}
                                />
                            </Col>
                        </Col>
                    </Row>
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
