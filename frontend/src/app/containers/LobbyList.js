import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RequireName from '../hoc/requireName';

import { getRooms } from '../api';
import LobbyList from '../components/lobbyList';

class LobbyListContainer extends React.Component {
	componentDidMount() {
		getRooms();
	}

	render() {
		const { state: { room: { rooms } } } = this.props;
		return (
			<LobbyList rooms={rooms} />
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
