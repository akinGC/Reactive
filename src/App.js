import logo from './logo.svg';
import './App.css';
import Exp from './components/Exp';

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
    <h1>Expense Items</h1>
   <Exp obj={obj}/>

    </div>
  );
}

export default App;
