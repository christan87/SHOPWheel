import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Input = props => {
    const {
        type,
        error,
        label,
        rows,
        name,
        value,
        placeholder,
        inlineElement,
        disabled
    } = props;


    const onChange = e => {

    }

    if(type === 'textarea') {
        const styles = `input-box${error? ' invalid' : ''}`;
        return (
            <div className={styles}>
                {label  && <label>{label}</label>}
                <textarea 
                    type={'textarea'}
                    onChange={e => {onChange(e);}}
                    rows={rows}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    className={'textarea-text'}
                />
                <span className='invalid-message'>{error && error[0]}</span>
            </div>
        );
    }  else {
        const styles = `input-box${inlineElement ? ' inline-btn-box' : ''} ${error? ' invalid' : ''}`;
        return (
            <div className={styles}>
                {label  && <label>{label}</label>}
                <div className='input-text-block'>
                    <input 
                        className={'input-text'}
                        autoComplete='on'
                        type={type}
                        onChange={e => {onChange(e)}}
                        disabled={disabled}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                    />
                    {inlineElement}
                </div>
                <span className='invalid-message'>{error && error[0]}</span>
            </div>
        )
    }
}

Input.defaultProps = {
    rows: '4',
    inlineElement: null
};

export default Input