import React,{useState} from "react";
import "./testStyles.css"


function App() {
    const[Count,setCount]=useState(3)

function decrement(){
    setCount(Count-1)
}

function increment(){
    setCount(Count+1)
}

  return (
    <div className="testbg">
      <button onClick={decrement}>-</button>
      <span>{Count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;