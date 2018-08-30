import React from 'react';
import { Chance } from 'chance';
import Login from './Login';
import LoginContainer from './LoginContainer';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import { Typography, Input, Button } from '@material-ui/core';
import configureStore from '../../configureStore';
import { Provider } from 'react-redux';

export class LoginDriver {
  constructor() {
    this.container = document.createElement('div');
    this.mount = undefined;
    this.given = {};

    this.when = {
      render: () => {
        this.mount = createMount();
        const store = configureStore();
        const auth = {
          loggingIn: true,
          loggedIn: false,
          userEmail: 'bla@bla.com'
        };
        this.component = this.mount(
          <Provider store={store}>
            <LoginContainer />
          </Provider>
        );
        //console.log(this.component.debug());
        return this;
      }
    };

    this.get = {
      byDataHook: hook => this.component.find(`[data-hook="${hook}"]`),
      typography: () => this.component.find(Typography),
      nameInput: () => this.component.find('input').at(0),
      passwordInput: () => this.component.find('input').at(1),
      loginButton: () => this.component.find(Button),
      component: () => this.component
    };
  }

  cleanup() {
    this.component = undefined;
    this.mount.cleanUp();
  }
}
