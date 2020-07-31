import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './lobbyHeader.scss';

const LobbyHeader = ({ title, className }) => (
	<h2 className={classnames('lobby-header', className)}>{title}</h2>
);

LobbyHeader.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
};

LobbyHeader.defaultProps = {
	className: null,
};

export default LobbyHeader;
