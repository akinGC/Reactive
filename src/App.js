import logo from './logo.svg';
import './App.css';
import Exp from './components/Expenses/Exp';
import Form from './components/Expenses/Form';

function App() {
  let obj=[
    {
      item:'Food Rs10',
      place:'New Delhi',
      date:new Date()
    },
    {
      item:'Food Rs100',
      place:'Moscow',
      date:new Date()
    },
    {
      item:'Food Rs200',
      place:'LA',
      date:new Date()
    }
  ]
 
  return (
    
    <div className="App">
      <Form/>
    <h1>Expense Items</h1>
    {
      obj.map((user)=>
      (
         <Exp obj={user}/>
      )
      )
    }
 

    </div>
  );
}

export default App;
