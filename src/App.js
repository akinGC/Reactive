
import './App.css';
import Exp from './components/Expenses/Exp';
import Form from './components/Expenses/Form';
import { useEffect, useState } from 'react';

function App() {

  const [obj,setObj]=useState([
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
  ])
  const [newval,setnewval]=useState('--select--')


 function runUpdate(e){
  const newObj={
    ...e,
    id:'123'
  }
 setObj([...obj,newObj])
 }




 const filteredExpnses = obj.filter((expense) => {
 
  return new Date(expense.date).getFullYear().toString() === newval;
});
  return (
    
    <div className="App">
      <Form returned = {runUpdate}/>
    <h1>Expense Items</h1>
    <label for="sel">Filter</label>
    <select name='sel' onChange={(e)=>{setnewval(e.target.value)}}>
      <option>--select--</option>
      <option>2020</option>
      <option>2021</option>
      <option>2022</option>
    </select>
    {
      (newval == '--select--')?
          obj.map((user)=>
          (
             <Exp obj={user}/>
          )
          ):filteredExpnses.map((user)=>
          (
             <Exp obj={user}/>
          )
          )
        }
      
    </div>
  );
}

export default App;
