import React from "react";
import { connect } from "react-redux";

import TodoItem from "../todo-item/todo-item.component";

const TodoList = ({ todoData }) => {
  return (
    <div className="todo-list">
      {todoData.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todoData: state.todo,
});

export default connect(mapStateToProps)(TodoList);
