import { flatMap } from 'lodash';
import { act } from 'react-test-renderer';
import {ADD_TASK, DELETE, FINISHED} from '../actions/actionTypes';

const initialState = {
    data: [
        { title: 'Go to the office', isFinished: true },
        { title: 'Prepare tasks for today', isFinished: false },
        { title: 'Team meeting', isFinished: false },
        { title: 'Commit tasks changed', isFinished: false },
    ]
}
// @ts-ignore

export default function NumberReducer(state = initialState, action) {
    let newTaskList = state.data
  switch (action.type) {
    case ADD_TASK: {
        const newTask = {title: action.payload, isFinished: false}
      return {
        data: [...state.data, newTask]
      }
    }
    case FINISHED: {
        newTaskList[action.atIndex].isFinished = true
            console.log(newTaskList[action.atIndex].isFinished)
            return {...state, newTaskList}
        
    }
    case DELETE: {
        newTaskList = newTaskList.filter((item, i) => i !== action.atIndex )
        return {
            ...state,
            data: newTaskList
        }
        
    }
    default:
      return state;
  }
}
