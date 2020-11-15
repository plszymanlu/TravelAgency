import { createStore } from 'redux';
import reducers from '../reducers/index';

const store = createStore(reducers);

order: {
    trip: null,
    email: '',
    options: { },
},

export default store;