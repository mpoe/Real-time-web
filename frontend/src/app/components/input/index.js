import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = ({value, name, onChange, placeholder}) => (
    <input value={value} name={name} onChange={onChange} placeholder={placeholder} />
)

CustomInput.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
}

CustomInput.defaultProps = {
    onChange: null,
    placeholder: 'placeholder',
}

export default CustomInput;