import React from 'react';

const InputField = ({ label, type, name, placeholder, value, onChange }) => {
    return (
        <>
            <label>{label}</label>
            <input
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
