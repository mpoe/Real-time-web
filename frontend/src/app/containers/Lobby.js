import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PROPTYPE_HISTORY } from '../constants/proptypes';
import { getClientID } from '../api';
import Lobby from '../components/lobby';
import RequireName from '../hoc/requireName';

class LobbyContainer extends React.Component {
	componentDidMount() {
		getClientID(); // On load of the app (first page!) - get the clientid from the backend
	}

	onLobby = () => {
		const { history: { push } } = this.props;
		push('/lobby/browse');
	}

	render() {
		return (
			<Lobby
				onPublicRoom={() => alert('not supported')}
				onPrivateRoom={() => alert('not supported')}
				onLobby={this.onLobby}
			/>
		);
	}
}

LobbyContainer.propTypes = {
	state: PropTypes.shape({}).isRequired,
	history: PROPTYPE_HISTORY.isRequired,
};

const mapStateToProps = state => ({
	state,
});

const mapDispatchToProps = dispatch => ({
	/* sendTheAlert: () => {dispatch(ALERT_ACTION)} */
});

export default connect(mapStateToProps, mapDispatchToProps)(RequireName('/lobby')(LobbyContainer));
