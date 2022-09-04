import { Fragment, useState } from "react"
import App from "../../App"

const Form=(props)=>{
    

    function add(e){
        e.preventDefault()
        props.returned(state)
     
       
        setState({ title:'',
        amt:'',
        date:new Date()})
        
    }
    const [state,setState] = useState({
        title:'',
        amt:'',
        date:new Date()
    })
function chngd(e){

switch (e.target.name) {
    case 'title':
        setState({ ...state, title:e.target.value })
        break;
    case 'amount':
            setState({ ...state, amt:e.target.value })
            break;
    case 'date':
                setState({ ...state, date:e.target.value })
                break;
    default:
        break;
}
}
    return(
        <Fragment>
<form className="formg">
<input type="text"placeholder="EXP title"name="title"value={state.title} onChange={chngd}></input>
<input type="text"placeholder="exp amt"name="amount"value={state.amt} onChange={chngd}></input>
<input type="date" onChange={chngd} name="date"value={state.date}></input>
<button onClick={add}>Add</button>
</form>
        </Fragment>
    )
}
export default Form;
