import { useState } from "react"
export function NewTodoForm(){
    const [newItem,setnewItem] = useState("")
    function handleSubmit(e){
        e.preventDefault()
    
        // setTodos((currentTodos)=>{
        //   return [
        //     ...currentTodos,
        //     {id: crypto.randomUUID(), title: newItem , completed:false},
    
        //   ]
        // }) 
        setnewItem("")
       }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">

        <div className="form-row">
            <label>New Item</label>
            <input value ={newItem}
            onChange={e=> setnewItem(e.target.value)}
            type="text"
            id="item"/>

        </div>
        <button className="btn"> Add</button> 
    </form>
    )
}
