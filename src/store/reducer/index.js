import { combineReducers } from "redux";
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  FILTTER_TODO,
  REMOVE_COMPLETED_TODO
} from "../constants";
import { getLocalStorage } from "../../utils";
const INITIAL_STATE = {
  todosList: getLocalStorage("todosList") || [],
  filteredType: "all"
};
const todosList = (state = INITIAL_STATE.todosList, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.data];
    case REMOVE_TODO:
      const updatedList = state.filter(item => {
        return item.id !== action.data;
      });
      return updatedList;
    case TOGGLE_TODO:
      const toggledTodoList = state.map(item => {
        if (item.id === action.data) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return toggledTodoList;
    case REMOVE_COMPLETED_TODO:
      return state.filter(item => {
        return !item.completed;
      });
    default:
      return state;
  }
};

const filteredType = (state = INITIAL_STATE.filteredType, action) => {
  if (action.type === FILTTER_TODO) {
    return action.data;
  }
  return state;
};
export default combineReducers({
  todosList,
  filteredType
});
