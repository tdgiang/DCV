import {
    ADD_TASK,
    FINISHED,
    DELETE
  } from './actionTypes';

  export const addTask = (newTask, resetTask) => {
      return {
        type: ADD_TASK,
        payload: newTask,
        resetTask
      }
  }
  
  export const onFinishedItem = (index) => {
    return {
      type: FINISHED,
      atIndex: index,

    };
  };
  
  export const onDeleteItem = (index) => {
    return {
      type: DELETE,
      atIndex: index
    };
  };
  