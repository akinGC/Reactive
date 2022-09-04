
const ExpDate=(props)=>{
    
    return(
        <div>
            <h5>{props.date.toLocaleString('en-US',{day:'2-digit',month:'long',year:'numeric'})}</h5>
        </div>
    )
}
export default ExpDate