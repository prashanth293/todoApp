import { createStore } from "redux";
import todosList from "./reducer";
const store = createStore(todosList);
console.log(store.getState());
window.store = store;
export default store;
