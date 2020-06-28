// @ts-check
import React from 'react';
import PropTypes from 'prop-types';

import './namepicker.scss';

import Input from '../input';
import Button from '../button';
import Background from '../background';

const NamePicker = ({ submit, handleInput, username }) => (
	<Background>
		<div className="namepicker">
			<h1 className="namepicker__title">Merchant</h1>
			<Input
				value={username}
				name="username"
				onChange={handleInput}
				placeholder="nickname"
				containerClass="namepicker__input-container"
				className="namepicker__input"
				labelText="NAME"
			/>
			<Button onClick={submit} text="play" className="namepicker__submit" />
		</div>
	</Background>
);

NamePicker.propTypes = {
	submit: PropTypes.func.isRequired,
	handleInput: PropTypes.func.isRequired,
	username: PropTypes.string,
};

NamePicker.defaultProps = {
	username: '',
};

export default NamePicker;
