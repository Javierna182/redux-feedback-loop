import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';

import feelingReducer from './feelingReducer.js';
import understandingReducer from './understandingReducer.js';
import supportedReducer from './supportedReducer.js';
import commentsReducer from './commentsReducer.js';

const store = createStore(combineReducers({
    feeling: feelingReducer,
    understanding: understandingReducer,
    supported: supportedReducer,
    comments: commentsReducer,
}), applyMiddleware(logger)
);

export function StoreProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}