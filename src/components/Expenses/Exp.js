import ExpDate from "./ExpDate"
const Exp=(props)=> {

    return(
       
        <div className="whole">
             {props.obj.map((user,key) => (
                
        <div className="user"key={key}>
          <h5>{user.item}&nbsp;<span>{user.place}</span>
    <span><ExpDate date={user.date}></ExpDate></span>
          </h5>
        </div>
      ))}
        </div>
    )
}

export default Exp