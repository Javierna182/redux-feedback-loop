function supportedReducer(state = 0, action){
    if (action.type === 'ADD_SUPPORTED') {
        return action.payload;
    }
    return state;
}

export default supportedReducer;