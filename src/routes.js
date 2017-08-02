import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './App';
import CurvedImage from './pages/CurvedImage';
import Bulma042 from './pages/Bulma-0.4.2';
import ReactDnD from './pages/ReactDnD';
import RenderingEngine from './pages/RenderingEngine';
import ReactSemanticUI from './pages/ReactSemanticUI';
import Firebase from './pages/Firebase'
import LoginPage from './pages/Firebase/Login/LoginPage'
import DashBoard from './pages/Firebase/Dashboard';
import Account from './pages/Firebase/Dashboard/children/Account'
import { routesByValue } from './utils/constants/routeConstants';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to={routesByValue.curvedImage.value}/>
    <Route path={routesByValue.curvedImage.value} component={CurvedImage} />
    <Route path={routesByValue.bulma042.value} component={Bulma042} />
    <Route path={routesByValue.reactDnD.value} component={ReactDnD} />
    <Route path={routesByValue.renderingEngine.value} component={RenderingEngine} />
    <Route path={routesByValue.reactSemanticUI.value} component={ReactSemanticUI} />
    <Route path={routesByValue.firebase.value} component={Firebase}>
      <Route path={routesByValue.fireBaseLogin.value} component={LoginPage} />
      <Route path={routesByValue.fireBaseApp.value} component={DashBoard}>
        <Route path={routesByValue.fireBaseAccount.value} component={Account} />
      </Route>
    </Route>
  </Route>
)