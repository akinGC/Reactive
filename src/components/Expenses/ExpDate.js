
const ExpDate=(props)=>{
    
    return(
        <div>
            <h5>{props.date.toLocaleString('en-US',{month:'long'})}</h5>
        </div>
    )
}
export default ExpDate