import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

import './roomCreateActions.scss';

const LobbyActions = ({ onCancel, onCreate }) => (
	<div className="room-create-actions">
		<Button className="button--colored button--small" onClick={onCancel} text="cancel" />
		<Button className="button--colored button--small" onClick={onCreate} text="create room" />
	</div>
);

LobbyActions.propTypes = {
	onCancel: PropTypes.func.isRequired,
	onCreate: PropTypes.func.isRequired,
};

export default LobbyActions;
