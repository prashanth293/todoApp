import {
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_COMPLETED_TODO,
  TOGGLE_TODO,
  FILTTER_TODO
} from "../constants";
const generateRandomNumber = () => Math.floor(Math.random() * 1e16);

export const addTodos = data => ({
  type: ADD_TODO,
  data: { id: generateRandomNumber(), ...data }
});
export const removeTodos = data => ({
  type: REMOVE_TODO,
  data
});
export const removeCompletedTodos = () => ({
  type: REMOVE_COMPLETED_TODO
});
export const toggleTodos = data => ({
  type: TOGGLE_TODO,
  data
});
export const visibilityFilter = data => ({
  type: FILTTER_TODO,
  data
});
