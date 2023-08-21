import './App.css'
import { useState } from 'react';

function App() {
 
  const [login, setLogin] = useState(true);

const loginSwitch = ()=>{
    setLogin(!login);
}

  return (
    <div id="Container">
      <div id="user">
        <input hidden={login} placeholder="Enter the email id or phone" name="" id="" type="text" />
        <input hidden={login} placeholder="Full Name" name="" id="" type="text" />
        <input  placeholder="emailid ,phoneNo or userName " name="" id="" type="email" />
        <input  placeholder="Password" name="" id="" type="text" />
        <button>{login ? "signin" : "signup"}</button>
        <div id="footer">
          {login ? "Don't have an account" : "have an account"} <span onClick={loginSwitch}>{login ? "signup" : "login"}</span>
        </div>
      </div>
    </div>
  )
}

export default App
