import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './presentational/main-layout.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import store from './store';
import styles form './styles/styles';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch location={location}>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);