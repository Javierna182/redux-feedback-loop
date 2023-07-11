function understandingReducer(state = 0, action){
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

export default understandingReducer;