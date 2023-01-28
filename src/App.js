import React, {useState} from "react";
import "./App.css";
import List from "./components/List";

export default function App() {

  const [todoData, setTodoData] = useState([])
  const [value, setValue] = useState("")


  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    setTodoData((prev) => [...prev, newTodo])
    setValue("")
  }

  

  
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          <List todoData = {todoData} setTodoData = {setTodoData}/>

        <form style = {{display: "flex"}} onSubmit = {handleSubmit}>
          <input 
            type = "text"
            name = "value"
            style = {{flex: "10", padding: "5px"}}
            placeholder = "해야 할 일을 입력하세요."
            value = {value}
            onChange = {handleChange}
          />
          <input 
            type = "submit"
            value = "입력"
            className= "btn"
            style= {{flex: "1"}}
          />
        </form>
        </div>
      </div>
    )
  
}
