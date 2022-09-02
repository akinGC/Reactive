import ExpDate from "./ExpDate"
const Exp=(props)=> {
const zig=(e)=>{
 
  e.target.parentElement.remove()
}
    return(
       
        <div className="whole">
             {props.obj.map((user,key) => (
                
        <div className="user"key={key}>
          <h5>{user.item}&nbsp;<span>{user.place}</span>
    <span><ExpDate date={user.date}></ExpDate></span>
          </h5>
          <button onClick={zig}>click</button>
        </div>
      ))}
        </div>
    )
}

export default Exp