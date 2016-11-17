import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import heroes from './heroes';
import creators from './creators';
import comics from './comics';
import stories from './stories';

const rootReducer = combineReducers({
  routing: routerReducer,

  heroes,
  creators,
  comics,
  stories,
});

export default rootReducer;
