import React from 'react';
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

export default LobbyContainer;
