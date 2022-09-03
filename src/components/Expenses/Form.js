import { Fragment } from "react"

const Form=()=>{
function chngd(e){
console.log(e.target.value)
}
    return(
        <Fragment>
<form className="formg">
<input type="text"placeholder="EXP title"onChange={chngd}></input>
<input type="text"placeholder="exp amt" onChange={chngd}></input>
<input type="date" onChange={chngd}></input>
<button>Add</button>
</form>
        </Fragment>
    )
}
export default Form;