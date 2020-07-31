import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './lobbyRoomInfo.scss';

const LockIcon = require('assets/lock-icon.png');

const LobbyList = ({ room }) => (
	<Fragment>
		<div className="room-info">
			<div className="room-info__public">
				<span className="room-name">
					{room.name}
				</span>
				<span className="room-users">
					{`${room.users.length} user(s)`}
				</span>
			</div>
			{room.password !== '' && (
				<span className="room-password"><img className="icon" alt="lock icon" src={LockIcon} /></span>
			)}
		</div>
	</Fragment>
);

LobbyList.propTypes = {
	room: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		password: PropTypes.string,
	}).isRequired,
};

export default LobbyList;
