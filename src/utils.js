import { COMPLETED, ACTIVE } from "./constants";
export const getTodosByVisibilityFilter = (todosList, FiltterType) => {
  switch (FiltterType) {
    case COMPLETED:
      return todosList.filter(item => item.completed);
    case ACTIVE:
      return todosList.filter(item => !item.completed);
    default:
      return todosList;
  }
};

/**
 * This function sets the data to local storage per the key provided
 * @param {String} key The key to set into session storage
 * @param {Object} value The value to be set against the key in local storage
 */
export const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(`${key}`, JSON.stringify(value));
  } catch (err) {
    console.error(`Error :: local storage set error :: ${err}`);
  }
};

/**
 * This function gets the value/data from local storage based on the key provided.
 * @param {String} key The key identifier to get data from local storage
 */
export const getLocalStorage = key => {
  try {
    return JSON.parse(window.localStorage.getItem(`${key}`));
  } catch (err) {
    console.error(`Error :: local storage fetch error :: ${err}`);
    return;
  }
};
