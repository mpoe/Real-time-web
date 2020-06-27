import React from 'react';

import bg from 'assets/bg-frontpage.png';

import Button from '../button';

import './lobby.scss';

const Lobby = () => (
	<div className="namepicker__bg" style={{ backgroundImage: `url(${bg})` }}>
		<div className="lobby__container">
			<Button text="PUBLIC ROOM" className="lobby__button" />
			<Button text="PRIVATE ROOM" className="lobby__button" />
			<Button text="LOBBY" className="lobby__button" />
		</div>
	</div>
);

export default Lobby;
