import React from 'react';
import { Switch } from 'react-router-dom';
import {
  Route as ReactDOMRoute,
  BrowserRouter,
} from 'react-router-dom';
import Home from '../pages/Home';
import Reservations from '../pages/Reservations';


export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ReactDOMRoute path="/" exact component={Home} />
        <ReactDOMRoute path="/reservs" exact component={Reservations} />
     /
      </Switch>
    </BrowserRouter>
  );
}
