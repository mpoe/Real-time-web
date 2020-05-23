// @ts-check
import React from 'react';
import './namepicker.scss';

import bg from 'assets/bg-frontpage.png';
import Input from '../input';

const NamePicker = ({ submit, handleInput, username }) => (
	<div className="namepicker__bg" style={{ backgroundImage:`url(${bg})` }}>
		<div className="namepicker">
			<h1 className="namepicker__title">Merchant</h1>
			<Input value={username} name="username" onChange={handleInput} placeholder="choose a nickname" />
			<button>Play</button>

		</div>
	</div>
)

export default NamePicker;
