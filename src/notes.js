import React from 'react';
import "./index.css"

const ToDoItem = (props) => {
    const { item, deleteItem } = props;
  
    return (
      <div className="ToDoItem">
        <p className="ToDoItem-Text">{item.text}</p>
        <button className="ToDoItem-Delete" onClick={() => deleteItem(item.id)}>
          &times;
        </button>
      </div>
    );
  };
  
  export default ToDoItem;
  