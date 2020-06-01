// @ts-check
import React from 'react';
import './namepicker.scss';

import bg from 'assets/bg-frontpage.png';
// import bg from 'assets/frontpage-mockup.png';
import Input from '../input';
import Button from '../button';

const NamePicker = ({ submit, handleInput, username }) => (
	<div className="namepicker__bg" style={{ backgroundImage:`url(${bg})` }}>
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
	</div>
)

export default NamePicker;
