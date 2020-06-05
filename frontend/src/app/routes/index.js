import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NamePicker from '../containers/NamePicker';
import NotFound from '../containers/NotFound';
import Lobby from '../containers/Lobby';
import Game from '../containers/Game';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={NamePicker} />
		<Route path="/lobby/:gameid" component={Game} />
		<Route exact path="/lobby" component={Lobby} />
		<Route component={NotFound} />
	</Switch>
);

export default Routes;
