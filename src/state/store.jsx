import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import { takeEvery, put } from "redux-saga/effects";

import feelingReducer from './feelingReducer.js';
import understandingReducer from './understandingReducer.js';
import supportedReducer from './supportedReducer.js';
import commentsReducer from './commentsReducer.js';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    feeling: feelingReducer,
    understanding: understandingReducer,
    supported: supportedReducer,
    comments: commentsReducer,
}), applyMiddleware(sagaMiddleware,logger)
);


function* postFeedback(action) {
    try {
      yield fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("error add feedback", error);
    }
  }

function* watcherSaga() {
    yield takeEvery("ADD_FEEDBACK", postFeedback);
  }
  
sagaMiddleware.run(watcherSaga);

export function StoreProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}