import React from 'react';
import PropTypes from 'prop-types';

import './lobbyLayout.scss';

const LobbyLayout = ({ children }) => {
	return (
		<div className="lobby-layout__wrapper">
			<div className="lobby-layout__outer">
				<div className="lobby-layout__inner">
					{children}
				</div>
			</div>
		</div>
	)
};

export default LobbyLayout;
