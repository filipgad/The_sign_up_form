import React from 'react';
import PropTypes from 'prop-types';

export const FormInput = (props) => {
    const { title, type, name, placeholder, value, onChange } = props;
    return (
        <div>
            <label>{title}</label>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required/>
        </div>    
    );
};

FormInput.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};