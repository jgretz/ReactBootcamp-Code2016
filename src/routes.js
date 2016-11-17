import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Heroes from './components/heroes';
import NotFoundPage from './components/not_found';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Heroes}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
