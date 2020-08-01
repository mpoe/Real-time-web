import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

const LobbyActions = ({ onPublicRoom, onPrivateRoom }) => (
	<div className="bottom-actions">
		<Button className="button--colored button--small" onClick={onPublicRoom} text="create public room" />
		<Button className="button--colored button--small" onClick={onPrivateRoom} text="create private room" />
	</div>
);

LobbyActions.propTypes = {
	onPublicRoom: PropTypes.func.isRequired,
	onPrivateRoom: PropTypes.func.isRequired,
};

export default LobbyActions;
