import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';
import Background from '../background';

import './lobby.scss';

const Lobby = ({ onPublicRoom, onPrivateRoom, onLobby }) => (
	<Background>
		<div className="lobby__container">
			<Button text="PUBLIC ROOM" className="lobby__button" onClick={onPublicRoom} />
			<Button text="PRIVATE ROOM" className="lobby__button" onClick={onPrivateRoom} />
			<Button text="LOBBY" className="lobby__button" onClick={onLobby} />
		</div>
	</Background>
);

Lobby.propTypes = {
	onPublicRoom: PropTypes.func.isRequired,
	onPrivateRoom: PropTypes.func.isRequired,
	onLobby: PropTypes.func.isRequired,
};

export default Lobby;
