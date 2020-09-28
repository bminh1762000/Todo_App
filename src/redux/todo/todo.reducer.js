import TodoTypes from "./todo.types";

const initialState = [];

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoTypes.ADD_TODO:
      return [
        ...state,
        {
           id : action.id,
          text: action.payload,
          completed: false,
        },
      ];
    case TodoTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case TodoTypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default TodoReducer;
