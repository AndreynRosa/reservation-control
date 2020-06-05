import React from 'react';
import { Switch } from 'react-router-dom';
import {
  Route as ReactDOMRoute,
  BrowserRouter,
} from 'react-router-dom';
import Home from '../pages/Home';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ReactDOMRoute path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
