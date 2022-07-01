import {
    ADD,
    SUB
  } from './actionTypes';
  
  export const add = (number) => {
    return {
      type: ADD,
      payload: number
    };
  };
  
  export const sub = (number) => {
    return {
      type: SUB,
      payload: number
    };
  };
  