// @ts-check
import React, { Fragment } from 'react';
import './namepicker.scss';

const NamePicker = ({ submit, handleInput, username }) => (
	<Fragment>
		<h1>Test</h1>
		<form onSubmit={submit}>
			<input value={username} name="username" onChange={handleInput} placeholder="choose a nickname" />
		</form>
	</Fragment>
)

export default NamePicker;
