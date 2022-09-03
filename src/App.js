import logo from './logo.svg';
import './App.css';
import Exp from './components/Expenses/Exp';
import Form from './components/Expenses/Form';
import { useState } from 'react';

function App() {
  let obj=[
    {
      title:'Food Rs10',
      amt:'New Delhi',
      date:new Date()
    },
    {
      title:'Food Rs100',
      amt:'Moscow',
      date:new Date()
    },
    {
      title:'Food Rs200',
      amt:'LA',
      date:new Date()
    }
  ]
const [trio,setTrio]=useState(obj)
// console.log(trio)
 function runUpdate(e){
  const newObj={
    ...e,
    id:'123'
  }
  console.log(newObj)
  setTrio([...trio,newObj])
 }
  return (
    
    <div className="App">
      <Form returned = {runUpdate}/>
    <h1>Expense Items</h1>
    {
      trio.map((user)=>
      (
         <Exp obj={user}/>
      )
      )
    }
 

    </div>
  );
}

export default App;
