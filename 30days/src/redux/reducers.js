// Initial (starting) state
export const initialState = {
  currentTime: new Date().toString(),
};
// Our root reducer starts with the initial state
// and must return a representation of the next state
export const rootReducer = (state = initialState, action) => {
  return state;
};
