import React from 'react';

const LobbyList = ({ rooms }) => {
	console.log(rooms);
	return (
		rooms.map(room => (
			<div key={room.id}>{room.name}</div>
		))
	);
};

export default LobbyList;
