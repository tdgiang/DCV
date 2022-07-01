import {LOGIN} from '../actions/actionTypes';

const initialState = {
  user: {},
  isSignedIn: false,
  expiredTime: new Date(),
  userInfo: {},
};
// @ts-ignore
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      console.log(action.data);
      return {...action.data, isSignedIn: true};
    }
    default:
      return state;
  }
}
