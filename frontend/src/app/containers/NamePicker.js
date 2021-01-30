import React from 'react';
import PropTypes from 'prop-types';

import { getClientID, setUserName } from '../api';
import NamePicker from '../components/namepicker';

class NamePickerContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = { username: '' };
	  }

	componentDidMount() {
		getClientID(); // On load of the app (first page!) - get the clientid from the backend
	}

	handleInput = (e) => {
		if (e.key === 'Enter') {
			this.submit(e);
		}
		this.setState({
			username: e.target.value
		})
	};

	submit = (e) => {
		const { history } = this.props;
		const { username } = this.state;
		e.preventDefault();
		setUserName(username);
		history.push('/lobby');
	}

	render() {
		const { username } = this.state;
		return (
			<NamePicker
				submit={this.submit}
				handleInput={this.handleInput}
				username={username}
			/>
		);
	}
}

NamePickerContainer.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	})
};

export default NamePickerContainer;
