import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './Login';
import ItemList from './ItemList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
          <Scene key="login" component={Login} initial />
          <Scene key="itemlist" component={ItemList} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;