import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(10);
  
  const func = () => {
    setCount(count + 1);
  };
  const func1 = () => {
    setCount(count - 1);
  };
  const func2=()=>{
    setCount(count**3)
  }
  const func3=()=>{
    setCount((count/3)/3)
  }
  const func4=()=>{
    setCount(0)
  }
 
  return (
    <>
      <div className="container">
        <h1 className="h1">React Counter app  </h1>
        <h2 className="h2">Counter </h2>
        <h1  className="h3">{count}</h1>
        <div className="btn">
        <button onClick={func}>Increase</button>
        {"  "}
        <button onClick={func1}>Decrease</button>
        {"  "}
        <button onClick={func2}>XX3</button>
        {"  "}
        <button onClick={func3}>-XX3</button>
        {"  "}
        <button onClick={func4}>Reset</button>
        </div>
        {"             "}
       

       
      </div>
    </>
  );
}

export default App;
