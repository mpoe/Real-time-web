import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NamePicker from '../containers/NamePicker';
import NotFound from '../containers/NotFound';
import Lobby from '../containers/Lobby';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={NamePicker} />
		<Route path="/lobby" component={Lobby} />
		<Route component={NotFound} />
	</Switch>
);

export default Routes;
