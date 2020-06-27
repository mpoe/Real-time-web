import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { joinRoom } from '../api';

import Game from '../components/game';
import Draft from '../components/draft';
import Room from '../components/room';

class RoomContainer extends React.Component {
	componentDidMount() {
		const { match: { params: { roomId } } } = this.props;
		joinRoom(roomId);
	}

	render() {
		const { match: { params: { roomId } } } = this.props;
		return (
			<Room id={roomId} />
		);
	}
}

RoomContainer.propTypes = {
	state: PropTypes.shape({}).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);
