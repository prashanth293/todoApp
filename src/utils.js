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
