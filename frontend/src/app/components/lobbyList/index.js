import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import bg from 'assets/bg-lobby.png';

import Background from '../background';
import LobbyHeader from '../header';
import LobbyLayout from '../lobbyLayout';
import LobbyActions from '../lobbyActions';
import RoomInfo from '../lobbyRoomInfo';

import './lobbyList.scss';

const LobbyList = ({ rooms, onPublicRoom, onPrivateRoom }) => (
	<Background src={bg}>
		<LobbyLayout>
			<LobbyHeader title="Lobby" className="lobby-header--80" />
			<div className="lobby-wrapper">
				<div className="lobby-content">
					{Object.values(rooms).map(room => (
						<Link key={room.id} to={`/room/${room.id}`}>
							<RoomInfo room={room} />
						</Link>
					))}
				</div>
			</div>
			<LobbyActions onPrivateRoom={onPrivateRoom} onPublicRoom={onPublicRoom} />
		</LobbyLayout>
	</Background>
);

LobbyList.propTypes = {
	rooms: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
	}).isRequired,
	onPublicRoom: PropTypes.func.isRequired,
	onPrivateRoom: PropTypes.func.isRequired,
};

export default LobbyList;
