import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TodoListItem from "./components/todoListItem/todoListItem";
import Footer from "./components/footer/footer";
import { addTodos } from "./store/action";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todosList: []
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnSubmit(e) {
    e.preventDefault();
    const { inputValue } = this.state;
    const { fnAddTodos } = this.props;
    if (!inputValue) {
      //have to write error handlers
      return;
    }
    const todo = { title: inputValue, completed: false };
    fnAddTodos(todo);
    this.setState({ inputValue: "" });
  }
  handleOnChange(e) {
    this.setState({ inputValue: e.target.value });
  }
  render() {
    const { inputValue } = this.state;
    return (
      <div className="app">
        <form className="full-todo-list" onSubmit={this.handleOnSubmit}>
          <input
            id="todoTitle"
            className="add-todo-list"
            type="text"
            placeholder="what todo"
            onChange={this.handleOnChange}
            value={inputValue}
          />
        </form>
        <TodoListItem />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  fnAddTodos: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  fnAddTodos: data => dispatch(addTodos(data))
});

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default withConnect(App);
