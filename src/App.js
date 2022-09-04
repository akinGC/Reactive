
import './App.css';
import Exp from './components/Expenses/Exp';
import Form from './components/Expenses/Form';
import { useEffect, useState } from 'react';
import Obj from './mistry/Obj';
import FrmPart from './Expense app/FrmPart';
import FrmCard from './Expense app/FrmCard';
import Show from './Expense app/Show';

function App() {

  const [obj,setObj]=useState([
    {
      title:'Food Rs10',
      amt:89,
      date:new Date()
    },
    {
      title:'Food Rs100',
      amt:90,
      date:new Date()
    },
    {
      title:'Food Rs200',
      amt:100,
      date:new Date()
    }
  ])
  const [sel,setSel]  = useState('--select--')
  const filterval = obj.filter((end)=>{
    return new Date(end.date).getFullYear().toString()==sel
  })
console.log(filterval)
function updated(e){
  setObj([...obj,e])
  
}
const [frmtype,setFrmtype] = useState(false)
function vat(e){
  setFrmtype(e)
}

  return (
    
   
  
    <div className='expwhole'>
      {
        (frmtype)? <FrmPart rerun={updated} getintel={vat}/>:<FrmCard  frmstate={vat}/>
      }
 
  <div className='outblkCard'>
    <div className='outflt'>
      <div className='outfltin'>
        <span>Filter by year</span>
        <select onChange={(e)=>{setSel(e.target.value)}} className="selitm">
          <option>--select--</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </div>
      {
        (sel == '--select--')?
        obj.map((end)=>(
<Show obj={end}/>
        )):(filterval.length!=0)?filterval.map((end)=>(
          <Show obj={end}/>
                  )):<p className='nulcntent'>Empty List!</p>
      }
      
    </div>
  </div>
    </div>
  );
}

export default App;
