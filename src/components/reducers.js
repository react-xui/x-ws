const reducers = (state = {}, action) => {
    return Object.assign({}, state, action.data);
}
export default reducers;