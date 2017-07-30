import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { SignUp, Login, Map } from './components';


const RouterComponent = () =>
    <Router>
    <Scene key="root">
    <Scene key="login" component={Login} hideNavBar initial/>
    <Scene key="signUp" component={SignUp} hideNavBar  />
    <Scene key="map" component={Map} hideNavBar />
    </Scene>
    </Router>
;

export default RouterComponent;
