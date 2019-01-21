import React from 'react';
import { subscribeToTimer, getClientID } from '../api/api';
import {App} from '../components/App';

import {connect} from 'react-redux'

class AppContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			timestamp: 'no timestamp yet',
		}
	}

	componentDidMount() {
		getClientID();
	}


	render() {
		return (
			<App
				timer={this.state.timestamp}
				state={this.props.state}
			/>
		);
	}
}

const mapStateToProps = function(state) {
  return {
    state: state,
  }
}

function mapDispatchToProps(dispatch) {
	return({
			/* sendTheAlert: () => {dispatch(ALERT_ACTION)} */
	})
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);