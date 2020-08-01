import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

const LobbyActions = ({ startGame }) => (
	<div className="bottom-action">
		<Button className="button--colored button--small" onClick={startGame} text="start game" />
	</div>
);

LobbyActions.propTypes = {
	startGame: PropTypes.func.isRequired,
};

export default LobbyActions;
