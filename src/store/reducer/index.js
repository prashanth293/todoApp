import { combineReducers } from "redux";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, FILTTER_TODO } from "../constants";

const todosList = (state = [], action) => {
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
    default:
      return state;
  }
};

const filteredType = (state = "all", action) => {
  if (action.type === FILTTER_TODO) {
    return action.data;
  }
  return state;
};
export default combineReducers({
  todosList,
  filteredType
});
