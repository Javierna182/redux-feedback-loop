import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(combineReducers({
    feeling: feelingReducer,
    understanding: understandingReducer,
    support: supportReducer,
    comments: commentsReducer,
    review: reviewReducer
}));

export function StoreProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}