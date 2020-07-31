import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.scss';

const CustomButton = ({ onClick, text, className }) => (
	<div>
		<button type="button" className={classnames(className)} onClick={onClick}>{text}</button>
	</div>
);

CustomButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};

CustomButton.defaultProps = {
	className: null,
};

export default CustomButton;
