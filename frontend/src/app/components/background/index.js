import React from 'react';
import PropTypes from 'prop-types';

import bg from 'assets/bg-frontpage.png';

const Background = ({ src, children }) => {
	return (
		<div className="namepicker__bg" style={{ backgroundImage: `url(${src})` }}>
			{children}
		</div>
	);
};

Background.propTypes = {
	src: PropTypes.any,
	children: PropTypes.any,
};

Background.defaultProps = {
	src: bg,
};

export default Background;
