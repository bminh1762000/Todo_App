import React from 'react';

const TodoItem = () => {
   return (
      <div className="todo-item">
         <p className='todo'></p>
         <button className='delete' type='button'>Delete</button>
         <button className='complete' type='button'>Complete</button>
      </div>
   );
};

export default TodoItem;
