import './App.css';
import Card from './Card';
import Nav from './Nav';
import { useState } from 'react';


function App() {
  let [data,setData]=useState([])
  
  console.log("appdata",data)
  
  return (
    <div className="App">
      <Nav setData={setData} />
      <Card data={data}/>

      
    </div>      
  );
}

export default App;
