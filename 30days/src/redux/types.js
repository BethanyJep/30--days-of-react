export const FETCH_NEW_TIME = "FETCH_NEW_TIME";

import * as types from './types';
{
    type: types.FETCH_NEW_TIME,
    payload: new Date().toString() // Any serializable value
}

export const rootReducer = (state = initialState, action) => {
 switch (action.type) {
 case types.FETCH_NEW_TIME:
 return { ...state, currentTime: action.payload };
 default:
 return state;
 }
};