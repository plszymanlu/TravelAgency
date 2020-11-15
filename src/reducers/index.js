import { combineReducers } from 'redux';
import countriesReducer from './countries-reducer';

const reducers = combineReducers({
  countriesReducer,
});

import orderReducer from './orderRedux';

// ...

const reducers = {
  filters: filtersReducer,
  order: orderReducer,
};

export default reducers;