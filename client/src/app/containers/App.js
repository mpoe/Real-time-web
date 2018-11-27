import React from 'react';
import { subscribeToTimer } from '../api/api';

export class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			timestamp: 'no timestamp yet',
		}

		subscribeToTimer((err, timestamp) => {
			this.setState({timestamp})
		});
	}

	render() {
		return (
			<h1>This is the timer value: {this.state.timestamp}</h1>
		);
	}
}