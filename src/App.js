import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './Helper/Store';
import WebRoute from './Helper/WebRoute';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WebRoute />
      </Provider>
    );
  }
}