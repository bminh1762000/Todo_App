import TodoTypes from "./todo.types";

let nextTodoId = 0;

export const addTodo = (todo) => ({
  type: TodoTypes.ADD_TODO,
  id : nextTodoId++,
  payload: todo
});

export const deleteTodo = (todo) => ({
  type: TodoTypes.DELETE_TODO,
  payload: todo,
});

export const toggleTodo = (todo) => ({
  type : TodoTypes.TOGGLE_TODO,
  payload : todo
});
