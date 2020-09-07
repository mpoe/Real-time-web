import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getClientID } from '../api';
import NotFound from '../components/404';

class NotFoundContainer extends React.Component {
	componentDidMount() {
		getClientID(); // On load of the app (first page!) - get the clientid from the backend
	}

	render() {
		return (
			<NotFound />
		);
	}
}

NotFoundContainer.propTypes = {
};

const mapStateToProps = state => ({
	state,
});

const mapDispatchToProps = dispatch => ({
	/* sendTheAlert: () => {dispatch(ALERT_ACTION)} */
});

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundContainer);
