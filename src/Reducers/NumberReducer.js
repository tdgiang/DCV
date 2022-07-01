import {ADD, SUB} from '../actions/actionTypes';

const initialState = {
  number: 1
}
// @ts-ignore

export default function NumberReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      console.log(action.payload);
      return { number: state.number + action.payload }
    }
    case SUB: {
      // console.log(state);
      return { number: state.number  - action.payload}
    }
    default:
      return state;
  }
}
