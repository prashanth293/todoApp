import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, FILTTER_TODO } from "../constants";
let nextId = 0;
export const addTodos = data => ({
  type: ADD_TODO,
  data: { id: ++nextId, ...data }
});
export const removeTodos = data => ({
  type: REMOVE_TODO,
  data
});
export const toggleTodos = data => ({
  type: TOGGLE_TODO,
  data
});
export const visibilityFilter = data => ({
  type: FILTTER_TODO,
  data
});
