import ExpDate from "./ExpDate"
import {useState} from 'react'
const Exp=(props)=> {

const [amt,srAmt]= useState(props.obj.amt)
  const updateExp=()=>{
srAmt('updated!')
console.log(amt)
  }
const zig=(e)=>{
 
  e.target.parentElement.remove()
}
    return(
       
        <div className="whole">
            
                
        <div className="user">
          <h5>{amt}&nbsp;<span>{props.obj.title}</span>
    <span><ExpDate date={props.obj.date}></ExpDate></span>
          </h5>
          <button onClick={updateExp}>Exp</button>
          <button onClick={zig}>Delete</button>
          
        </div>
      
        </div>
    )
}

export default Exp