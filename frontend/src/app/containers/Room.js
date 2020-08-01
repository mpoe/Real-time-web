import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { joinRoom, getClientID, leaveRoom } from '../api';

import Room from '../components/room';
import RequireName from '../hoc/requireName';

class RoomContainer extends React.Component {
	componentDidMount() {
		const { match: { params: { roomId } } } = this.props;
		getClientID(); // On load of the app (first page!) - get the clientid from the backend
		joinRoom(roomId);
	}

	componentWillUnmount() {
		const {
			state: { user },
			match: { params: { roomId } },
		} = this.props;
		leaveRoom(roomId, user.id);
	}

	startGame = () => {
		alert('Not implemented :(');
	}

	render() {
		const {
			match: { params: { roomId } },
			state: {
				room: {
					room,
				},
			},
		} = this.props;
		return (
			<Room id={roomId} room={room} startGame={this.startGame} />
		);
	}
}

RoomContainer.propTypes = {
	state: PropTypes.shape({
		room: PropTypes.shape({
			room: PropTypes.shape({}),
		}),
	}).isRequired,
	match: PropTypes.shape({
		params: PropTypes.shape({
			roomId: PropTypes.string,
		}),
	}).isRequired,
};

const mapStateToProps = state => ({
	state,
});

const mapDispatchToProps = dispatch => ({
	/* sendTheAlert: () => {dispatch(ALERT_ACTION)} */
});

export default connect(mapStateToProps, mapDispatchToProps)(RequireName('/room')(RoomContainer));
