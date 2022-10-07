import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './Helper/Store';
import Navigator from './Helper/Navigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}