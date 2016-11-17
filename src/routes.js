import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Heroes from './components/heroes';
import Comics from './components/comics';
import Creators from './components/creators';
import Stories from './components/stories';
import NotFoundPage from './components/not_found';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Heroes}/>
    <Route path="heroes" component={Heroes}/>
    <Route path="heroes/:nameStartsWith" component={Heroes}/>
    <Route path="comics" component={Comics}/>
    <Route path="creators" component={Creators}/>
    <Route path="stories" component={Stories}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
