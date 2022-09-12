import './App.css';
import React from 'react';
import User from "./User";

function App() {
  return (
    <div className="App">
      {/* <h1>App component</h1> */}
      <User data = {{name:"Ahsan Khan", age : 65}}/>
    </div>
  );
}

export default App;
