import React, { useState } from "react"
import ToDoItem from "./notes"
import "./index.css"

const ToDo = () => {
  const [list, setList] = useState([
    { id: 1, text: "Хоть что сделай" },
    { id: 2, text: "Удачи" }
  ])
  const [toDo, setToDo] = useState("")

  const generateId = () => {
    if (list && list.length > 1) {
      return Math.max(...list.map((t) => t.id)) + 1;
    } else {
      return 1
    }
  }

  const createNewToDoItem = () => {
    
    if (!toDo) {
      alert("Please enter a todo!");
      return
    }
    const newId = generateId();
    const newToDo = { id: newId, text: toDo }
    setList([...list, newToDo])
    setToDo("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createNewToDoItem()
    }
  };

  const handleInput = (e) => {
    setToDo(e.target.value)
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }
          return ( <>
            <div className="Header"></div>
              <div className="ToDo">
                    <div className="ToDoInput">
                       <input type="textarea" value={toDo} onChange={handleInput} onKeyPress={handleKeyPress} />
                        <button className="ToDo-Add" onClick={createNewToDoItem}>
                           Add
                        </button>
                    </div>
            
                 
                   <div className="ToDo-Content">
                     {list.map((item) => {
                      return <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />;
                    })}
               </div>
             </div>
            </>
          )
    }
 
 


export default ToDo 