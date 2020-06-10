import React from "react"

import ToDoItem from "./ToDoItem"
import todosData from "./todosData"

function App() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default App