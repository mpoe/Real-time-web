import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NamePicker from '../containers/NamePicker';
import NotFound from '../containers/NotFound';
import Lobby from '../containers/Lobby';
import LobbyList from '../containers/LobbyList';
import Room from '../containers/Room';
import RoomCreate from '../containers/RoomCreate';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={NamePicker} />
		<Route path="/room/:roomId" component={Room} />
		<Route path="/lobby/browse" component={LobbyList} />
		<Route path="/lobby/create" component={RoomCreate} />
		<Route exact path="/lobby" component={Lobby} />
		<Route component={NotFound} />
	</Switch>
);

export default Routes;
