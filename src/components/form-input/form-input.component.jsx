import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addTodo } from "../../redux/todo/todo.actions";

const FormInput = ({ addTodo }) => {
  const [values, setValues] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues("");
  };
  return (
    <FormInputContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <button type="submit" onClick={() => addTodo(values)}>
          Add
        </button>
      </form>
    </FormInputContainer>
  );
};

const FormInputContainer = styled.div`
  display: flex;
  place-content: center;
`;

const mapDispatchToProps = (dispatch) => ({
  addTodo: (values) => dispatch(addTodo(values)),
});

export default connect(null, mapDispatchToProps)(FormInput);
