import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ALL, COMPLETED, ACTIVE } from "../../constants";
import { visibilityFilter } from "../../store/action";
import "./footer.css";

class footer extends React.Component {
  render() {
    const { fnVisibilityFilter, todosList } = this.props;
    const TotalActiveTodos = todosList.filter(item => !item.completed).length;
    if (!todosList.length) {
      return null;
    }
    return (
      <div className="footer">
        <button className="filter-btn" onClick={() => fnVisibilityFilter(ALL)}>
          {ALL}
        </button>
        <button
          className="filter-btn"
          onClick={() => fnVisibilityFilter(ACTIVE)}
        >
          {ACTIVE}
        </button>
        <button
          className="filter-btn"
          onClick={() => fnVisibilityFilter(COMPLETED)}
        >
          {COMPLETED}
        </button>
        <div>
          {TotalActiveTodos
            ? `${TotalActiveTodos} ${
                TotalActiveTodos === 1 ? "task" : "tasks"
              } left`
            : "No task left"}
        </div>
      </div>
    );
  }
}

footer.propTypes = {
  todosList: PropTypes.array,
  fnVisibilityFilter: PropTypes.func
};
footer.defaultProps = {
  todosList: []
};

const mapStateToProps = state => ({
  todosList: state.todosList
});
const mapDispatchToProps = dispatch => ({
  fnVisibilityFilter: data => dispatch(visibilityFilter(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(footer);
