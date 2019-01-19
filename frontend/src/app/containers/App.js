import React from 'react';
import { subscribeToTimer } from '../api/api';
import {App} from '../components/App';

export class AppContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			timestamp: 'no timestamp yet',
		}
	}

	componentDidMount() {
		/* subscribeToTimer((err, timestamp) => {
			this.setState({ timestamp })
		}); */

	}


	render() {
		return (
			<App
				timer={this.state.timestamp}
			/>
		);
	}
}