import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router, Route, Switch, withRouter } from 'react-router';
import jwt_decode from 'jwt-decode';
import logo from './logo.svg';
import './App.css';
import { setAuthToken } from './utils/setAuthToken';
import { setCurrentUser } from './actions/users.actions';
import LoginContainer from './components/login/LoginContainer';
import RegisterContainer from "./components/register/RegisterContainer";
import DashboardContainer from './components/dashboard/DashboardContainer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

class App extends Component {
  componentDidMount = () => {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decodedUserData = jwt_decode(localStorage.jwtToken);
      const currentTime = Date.now() / 1000;
      if (decodedUserData.exp < currentTime) {
        this.props.handleLogout();
        console.log('user not autheticated');
        window.location.href = '/login';
      } else {
        this.props.handleLoginInWithValidToken(decodedUserData.name);
        this.props.handleSetCurrentUser(decodedUserData);
      }
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <PrivateRoute path="/" component={DashboardContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
