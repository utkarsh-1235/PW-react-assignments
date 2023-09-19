import './App.css'
import React from 'react';
function App() {
  const [counter, setCounter] = React.useState(0);
return (
    
      <div id="parent">
         <h1> {counter}</h1>

         <button onClick={()=>(setCounter(counter+1))}>Increment</button>
         <button onClick={()=>(setCounter(counter-1))}>Decrement</button>
         <button onClick={()=>(setCounter(0))}>set zero</button>
      </div>  
    
  )
}

export default App
