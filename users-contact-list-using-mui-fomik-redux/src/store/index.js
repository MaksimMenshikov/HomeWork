import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer';


const middlewares = applyMiddleware(
    thunk,
    createLogger({
        collapsed: true,
    })
);

const store = createStore(usersReducer, middlewares);

export default store;