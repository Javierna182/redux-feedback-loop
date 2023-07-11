function commentsReducer(state='', action){
    if (action.type === 'ADD_COMMENTS') {
        return action.payload;
    }
    return state;
}

export default commentsReducer;
