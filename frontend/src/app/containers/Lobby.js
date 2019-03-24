import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getClientID } from '../api';
import Lobby from '../components/lobby';

class LobbyContainer extends React.Component {
	componentDidMount() {
		getClientID(); // On load of the app (first page!) - get the clientid from the backend
	}

	render() {
		return (
			<Lobby />
		);
	}
}

LobbyContainer.propTypes = {
	state: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
	state,
});

const mapDispatchToProps = dispatch => ({
	/* sendTheAlert: () => {dispatch(ALERT_ACTION)} */
});

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
