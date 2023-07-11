function feelingReducer(state = 0, action){
    if (action.type === 'ADD_FEELING') {
        return action.payload;
    }
    return state;
}

export default feelingReducer;