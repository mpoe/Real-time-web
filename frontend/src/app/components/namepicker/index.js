import React, { Fragment } from 'react';
import './namepicker.scss';
import { setUserName } from '../../api';

export default class NamePicker extends React.Component {
	handleInput = (e) => {
		if (e.key === 'Enter') {
			this.submit(e, e.target.value);
		}
	};

	submit = (e, value = null) => {
		e.preventDefault();
		if (value) {
			return setUserName(value);
		}
		return setUserName(e.target.username.value);
	}

	render() {
		return (
			<Fragment>
				<h1>Test</h1>
				<form onSubmit={this.submit}>
					<input name="username" onKeyDown={this.handleInput} placeholder="choose a nickname" />
					<button type="submit">Submit</button>
				</form>

				<button type="submit">Submit</button>
			</Fragment>
		);
	}
}
