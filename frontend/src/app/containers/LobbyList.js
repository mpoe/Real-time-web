import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RequireName from '../hoc/requireName';

import { /* getClientID */ createRoomRequest, getRooms } from '../api';
import LobbyList from '../components/lobbyList';

class LobbyListContainer extends React.Component {
	componentDidMount() {
		getRooms();
	}

	componentDidUpdate(prevProps) {
		// if room is updated (onPublicRoom) -> redirect to /room/:roomId
		// could probably be handled better. but how?
		const { state: { room: { room } } } = this.props;
		const { history: { push } } = this.props;
		if (prevProps.state.room.room !== room) {
			push(`/room/${room.id}`);
		}
	}

	onPublicRoom = () => {
		const { state: { user: { id, username } } } = this.props;
		createRoomRequest({ host: id, password: '', name: `${username}'s room` });
	}

	onPrivateRoom = () => {
		const { history: { push } } = this.props;
		push('/lobby/create');
	}

	render() {
		const { state: { room: { rooms } } } = this.props;
		return (
			<LobbyList
				rooms={rooms}
				onPublicRoom={this.onPublicRoom}
				onPrivateRoom={this.onPrivateRoom}
			/>
		);
	}
}

LobbyListContainer.propTypes = {
	state: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
	state,
});

const mapDispatchToProps = dispatch => ({
	/* sendTheAlert: () => {dispatch(ALERT_ACTION)} */
});

export default connect(mapStateToProps, mapDispatchToProps)(RequireName('/lobby/browse')(LobbyListContainer));
