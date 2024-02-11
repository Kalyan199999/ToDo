import './App.css'
import {useState} from "react";



export default function App()
{
  let [todoInput, updateInput] = useState(""); 

  let [state, setstate] = useState(
    [
    {id:1,task:"Learn JAVA"},
    {id:2,task:"Learn PYTHON"},
    {id:3,task:"Learn Machine Learning"}
  ]
  )

  function AddNewToDo(){
    if(todoInput === "")
    {
      alert("Nothing To ADD......")
    }
    else{
      setstate(
        [...state,
          {
          id:state.length+1,
          task:(todoInput.toUpperCase())
      }
    ]);

    // clears the input field
    updateInput("");
    }
    
  }

  function Deletetodo(id)
  {
    let updatedtodos = state.filter((todo)=>{
      return todo.id !== id ;
    });

  setstate(updatedtodos);
  }

  return(
  <div className="container">

    <h1>TO DO LIST</h1>

    <div className="child1">
     
      <input type="text" className="input"  value={todoInput} onChange={(e)=>{
        let task = e.target.value;
        updateInput(task);
      }} />

      <button className="btn" onClick={()=>{AddNewToDo()}}>+</button>

    </div>

    <div className="child2">

      <ul className="list">

        {
          state.map((todo)=>{return(
            <li className="item" key={todo.id}>

          <p>{todo.task}</p>
          <button className="btn2" onClick={()=>{Deletetodo(todo.id)}}>❌</button>

        </li>
          )})
        }

      </ul>
    </div>
  
  </div>
  );
}