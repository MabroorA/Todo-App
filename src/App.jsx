import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App(){
  const [todos,setTodos] = useState([])
  function ToggleTodo(id,completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return { ...todo,completed}
        }
      return todo
     })
    })
  }
  function Addtodo(title){
    setTodos((currentTodos)=>{
          return [
            ...currentTodos,
            {id: crypto.randomUUID(), title, completed:false},
    
          ]
        }) 

  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }
  return (
  <>
    <NewTodoForm onSubmit={Addtodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos ={todos}/>
    </>
    )
}