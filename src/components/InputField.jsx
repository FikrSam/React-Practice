import React from 'react';

const InputField = ({ label, type, name, placeholder, value, onChange, autocomplete }) => {
    return (
        <>
            <label>{label}</label>
            <input
                autocomplete={autocomplete}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
        </>
    )
};

export default InputField;
