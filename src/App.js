import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainLayout from './modules/layout';
import AppRouter from './AppRouter';
import AppStore from './common/AppStore';


class App extends Component {
  render() {
    return (
      <Provider store={AppStore()}>
        <Router>
          <MainLayout router={AppRouter} />
        </Router>
      </Provider>
    );
  }
}

export default App;
