import React from 'react';
import PropTypes from 'prop-types';

import { setUserName } from '../api';

import NamePicker from '../components/namepicker';
import { PROPTYPE_HISTORY } from '../constants/proptypes';

const RequireName = path => (WrappedComponent) => {
	return class extends React.Component {
		static propTypes = {
			state: PropTypes.shape({
				state: PropTypes.shape({
					user: PropTypes.shape({
						username: PropTypes.string,
					}),
				}),
			}).isRequired,
			history: PROPTYPE_HISTORY.isRequired,
			match: PropTypes.shape({
				params: PropTypes.shape({}),
			}).isRequired,
		};

		constructor(props) {
			super(props);
			const { state: { user: { username } } } = this.props;
			this.state = {
				username: username || '',
			};
		}

		handleInput = (e) => {
			if (e.key === 'Enter') {
				this.submit(e);
			}
			this.setState({
				username: e.target.value,
			});
		};

		submit = (e) => {
			const {
				history: { push },
				match: {
					params: {
						roomId = null,
					},
				},
			} = this.props;
			const { username } = this.state;
			e.preventDefault();
			setUserName(username);

			let url = path;
			if (roomId) {
				url += `/${roomId}`;
			}

			push(url);
		}

		render() {
			const { state: { user: { username } } } = this.props;
			const { username: stateName } = this.state;
			if (!username) {
				return (
					<NamePicker
						handleInput={this.handleInput}
						submit={this.submit}
						username={stateName}
					/>
				);
			}
			return <WrappedComponent {...this.props} />;
		}
	};
};

export default RequireName;
