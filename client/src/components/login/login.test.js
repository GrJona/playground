import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import nock from 'nock';
import Login from './Login';
import { LoginDriver } from './login.driver';

let component;
let driver;

const getByDataHook = hook => component.find(`[data-hook="${hook}"]`);

const getLoginTitle = () => {
  return component.find(Typography).text();
};

function mockLoginRequest(expectedRequestBody, fakeResponse) {
  const test = nock('http://localhost:3003')
    .log(console.log)
    .post(`/api/users/login`, expectedRequestBody) //'email=testmail@gmail.com&password=testpass'
    .reply(200, {
      ...fakeResponse
    });

  console.log('in nock make login req', test.isDone());
}

describe('<Login />', () => {
  beforeEach(() => {
    driver = new LoginDriver();
  });

  afterEach(() => {
    if (!nock.isDone()) {
      const errorMessage = `pending mocks: ${nock.pendingMocks()}`;
      throw new Error(errorMessage);
    }
    nock.cleanAll();
    driver.cleanup();
  });

  it('renders without crashing', () => {
    driver.when.render();
    expect(driver.get.typography().text()).toEqual('Sign in');
  });

  it.only('sends the right params on login', () => {
    driver.when.render();
    mockLoginRequest(
      {
        email: 'testmail@gmail.com',
        password: 'testpass'
      },
      {
        success: true,
        token:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNzQwODZmMTI2NWZkMjU1ZmU2MGYyMSIsIm5hbWUiOiJ0ZXN0bmFtZSIsImlhdCI6MTUzNTM1ODE1MCwiZXhwIjoxNTM1MzYxNzUwfQ.fJAUhEsaxGRM8gw14G8Rv5eWThqyzHXGr5fILOTXkmg'
      }
    );
    //console.log(driver.get.nameInput().debug());
    console.log('simulating actions');
    driver.get.nameInput().simulate('change', { target: { name: 'email', value: 'testmail@gmail.com' } });
    driver.get.passwordInput().simulate('change', { target: { name: 'password', value: 'testpass' } });
    driver.get.loginButton().simulate('submit');

    //expect(nock.isDone()).toEqual(true);
  });
});
