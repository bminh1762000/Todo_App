import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { deleteTodo, toggleTodo } from "../../redux/todo/todo.actions";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <TodoItemContainer>
      <TodoContainer>{todo.text}</TodoContainer>
      <ButtonDelete type="button" onClick={() => deleteTodo(todo)}>
        Delete
      </ButtonDelete>
      <ButtonComplete type="button" onClick={() => toggleTodo(todo)}>
        {todo.completed ? "Complete" : "Progress"}
      </ButtonComplete>
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
  align-items: center;
  margin: 1rem 0;
  text-align: left;
`;

const TodoContainer = styled.p`
  font-size: 1.3rem;
  width: 100px;
`;

const Button = styled.button`
  height: 2.8rem;
  border: 0;
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  font-size: 1.05rem;
  cursor: pointer;
`;

const ButtonDelete = styled(Button)`
  background: #c0392b;
  margin: 0 1rem;
`;

const ButtonComplete = styled(Button)`
  background: #16a085;
`;

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  toggleTodo : todo => dispatch(toggleTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoItem);
