import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";

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
			username: e.target.value,
		});
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
		push: PropTypes.func,
	}).isRequired,
};

const mapStateToProps = state => ({
	state,
});

const mapDispatchToProps = dispatch => ({
	/* sendTheAlert: () => {dispatch(ALERT_ACTION)} */
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NamePickerContainer));
