import React from 'react';
import PropTypes from 'prop-types';

import bg from 'assets/bg-lobby.png';

import Background from '../background';
import LobbyHeader from '../header';
import LobbyLayout from '../lobbyLayout';
import Input from '../input';
import CreateRoomActions from '../roomCreateActions';

import './roomCreate.scss';

const RoomCreate = ({
	roomName,
	handleRoomName,
	password,
	handlePassword,
	handleCancel,
	handleCreate,
}) => (
	<Background src={bg}>
		<LobbyLayout>
			<LobbyHeader title="create room" />
			<div className="room-create__container">
				<Input
					value={roomName}
					name="roomName"
					onChange={handleRoomName}
					placeholder=""
					labelText="ROOM NAME"
					containerClass="room-create__input-container"
					labelClass="room-create__input-label"
					className="room-create__input"
				/>
				<Input
					value={password}
					name="password"
					onChange={handlePassword}
					placeholder="empty (public room)"
					labelText="ROOM PASSWORD"
					containerClass="room-create__input-container"
					labelClass="room-create__input-label"
					className="room-create__input"
				/>
			</div>
			<CreateRoomActions onCancel={handleCancel} onCreate={handleCreate} />
		</LobbyLayout>
	</Background>
);

RoomCreate.propTypes = {
	roomName: PropTypes.string.isRequired,
	handleRoomName: PropTypes.func.isRequired,
	password: PropTypes.string.isRequired,
	handlePassword: PropTypes.func.isRequired,
	handleCancel: PropTypes.func.isRequired,
	handleCreate: PropTypes.func.isRequired,

};

export default RoomCreate;
