import React from "react";
import "./App.css";

import TodoList from "./components/todo-list/todo-list.component";
import FormInput from "./components/form-input/form-input.component";


const App = () => {
  return (
    <div className="App">
      <FormInput />
      <TodoList/>
    </div>
  );
}

export default App;
