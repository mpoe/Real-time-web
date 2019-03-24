import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getClientID } from '../api';
import NamePicker from '../components/namepicker';

class NamePickerContainer extends React.Component {
	componentDidMount() {
		getClientID(); // On load of the app (first page!) - get the clientid from the backend
	}

	render() {
		const { state } = this.props;
		console.log(state);
		return (
			<NamePicker
				// timer={this.state.timestamp}
				state={state}
			/>
		);
	}
}

NamePickerContainer.propTypes = {
	state: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
	state,
});

const mapDispatchToProps = dispatch => ({
	/* sendTheAlert: () => {dispatch(ALERT_ACTION)} */
});

export default connect(mapStateToProps, mapDispatchToProps)(NamePickerContainer);
