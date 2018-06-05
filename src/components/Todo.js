import React from 'react';
import '../styles/Todo.css'

const Todo = ({iter}) => (
  <div className="todo">
    <span className="todo__span">
      {`Task number ${iter}`}
    </span>
  </div>
);

export default Todo;
