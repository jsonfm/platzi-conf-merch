export const combineReducers = (...reducers) => (state, action) => reducers.reduce((acc, next) => next(acc, action), state);
