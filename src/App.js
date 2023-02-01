import React, {useState, useCallback} from "react";
import "./App.css";
import List from "./components/Lists";
import Form from "./components/Form";

const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : []

export default function App() {
  console.log('App Component')

  const [todoData, setTodoData] = useState(initialTodoData)
  const [value, setValue] = useState("")

  const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter(data => data.id !== id)
    console.log('newTodoData', newTodoData)
    setTodoData(newTodoData)
    localStorage.setItem('todoData', JSON.stringify(newTodoData))
  },[todoData])

  const handleSubmit = (e) => {
    e.preventDefault()

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    setTodoData((prev) => [...prev, newTodo])
    localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]))
    setValue("")
  }

  const handleRemoveClick = () => {
    setTodoData([])
    localStorage.setItem('todoData', JSON.stringify([]))
  }

    return(
      <div className="flex items-center justify-center w-screen h-screen bg-red-200">
        <div className="w-full p-6 m-4 bg-white rounded-xl shadow-xl lg:w-3/4 lg:max-w-lg">
          <div className="flex justify-between mb-3">
            <h1 className="text-lg font-bold">Todo List</h1>
            <button
              className='p-1.5 text-red-300 border-2 border-red-300 rounded-lg hover:text-white hover:bg-red-200 shadow-lg' 
              onClick={handleRemoveClick}>
              Delete All
              </button>
          </div>
          <List handleClick = {handleClick} todoData = {todoData} setTodoData = {setTodoData}/>
          <Form handleSubmit = {handleSubmit} value = {value} setValue = {setValue}/>
        </div>
      </div>
    )
  
}
