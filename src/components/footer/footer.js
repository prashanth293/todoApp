import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { cx } from "emotion";
import { ALL, COMPLETED, ACTIVE } from "../../constants";
import { visibilityFilter } from "../../store/action";
import "./footer.css";

class footer extends React.Component {
  render() {
    const { fnVisibilityFilter, todosList, filteredType } = this.props;
    const TotalActiveTodos = todosList.filter(item => !item.completed).length;
    if (!todosList.length) {
      return null;
    }
    return (
      <div className="footer">
        <button
          className={cx("filter-btn", {
            "filter-btn-active": filteredType === ALL
          })}
          onClick={() => fnVisibilityFilter(ALL)}
        >
          {ALL}
        </button>
        <button
          className={cx("filter-btn", {
            "filter-btn-active": filteredType === ACTIVE
          })}
          onClick={() => fnVisibilityFilter(ACTIVE)}
        >
          {ACTIVE}
        </button>
        <button
          className={cx("filter-btn", {
            "filter-btn-active": filteredType === COMPLETED
          })}
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
  todosList: state.todosList,
  filteredType: state.filteredType
});
const mapDispatchToProps = dispatch => ({
  fnVisibilityFilter: data => dispatch(visibilityFilter(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(footer);
