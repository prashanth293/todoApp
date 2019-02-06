import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { cx } from "emotion";
import { removeTodos, toggleTodos } from "../../store/action";
import { getTodosByVisibilityFilter, setLocalStorage } from "../../utils";
import "./todoListItem.css";

class todoListItem extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.todosList) !==
      JSON.stringify(this.props.todosList)
    ) {
      setLocalStorage("todosList", this.props.todosList);
    }
  }
  render() {
    const {
      todosList,
      fnToggleTodos,
      fnRemoveTodos,
      filteredType
    } = this.props;
    const todos = getTodosByVisibilityFilter(todosList, filteredType);
    if (!todosList.length) {
      return null;
    }
    return (
      <ul className="todos-list">
        {todos.map((item, index) => (
          <li
            className={cx("list-item", { "completed-todo": item.completed })}
            key={index}
          >
            <div className="todo-item">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                onChange={() => fnToggleTodos(item.id)}
                className="toggle-todo"
                checked={item.completed}
              />
              <label htmlFor={`checkbox-${index}`}>{item.title}</label>
              <button
                className="remove-todo-btn"
                onClick={e => fnRemoveTodos(item.id)}
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

todoListItem.propTypes = {
  todosList: PropTypes.array,
  fnRemoveTodos: PropTypes.func,
  fnToggleTodos: PropTypes.func
};
todoListItem.defaultProps = {
  todosList: []
};

const mapStateToProps = state => ({
  todosList: state.todosList,
  filteredType: state.filteredType
});
const mapDispatchToProps = dispatch => ({
  fnRemoveTodos: data => dispatch(removeTodos(data)),
  fnToggleTodos: data => dispatch(toggleTodos(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todoListItem);
