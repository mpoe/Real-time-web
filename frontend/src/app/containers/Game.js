import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Game from '../components/game';
import Draft from '../components/draft';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drafting: true,
            playing: false,
        }
    }

	render() {
        const { drafting, playing } = this.state;
        if(drafting) return <Draft />
        if(playing) return <Game />
	}
}

GameContainer.propTypes = {
	state: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
	state,
});

const mapDispatchToProps = dispatch => ({
	/* sendTheAlert: () => {dispatch(ALERT_ACTION)} */
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
