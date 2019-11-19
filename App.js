import React, { Component } from 'react';
import Router from './src/config/Router';
import { Provider } from 'react-redux';
import store from './src/config/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
