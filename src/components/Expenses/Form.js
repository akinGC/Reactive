import { Fragment, useState } from "react"

const Form=()=>{
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
<input type="text"placeholder="EXP title"name="title" onChange={chngd}></input>
<input type="text"placeholder="exp amt"name="amount" onChange={chngd}></input>
<input type="date" onChange={chngd} name="date"></input>
<button>Add</button>
</form>
        </Fragment>
    )
}
export default Form;