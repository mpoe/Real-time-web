import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getClientID } from '../api/api';
import App from '../components/App';


class AppContainer extends React.Component {
	componentDidMount() {
		getClientID(); //On load of the app (first page!) - get the clientid from the backend
	}

	render() {
		const { state } = this.props;
		return (
			<App
				// timer={this.state.timestamp}
				state={state}
			/>
		);
	}
}

AppContainer.propTypes = {
	state: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	state,
});

const mapDispatchToProps = dispatch => ({
	/* sendTheAlert: () => {dispatch(ALERT_ACTION)} */
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
