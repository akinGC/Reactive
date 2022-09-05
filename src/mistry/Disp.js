const Disp=(props)=>{
console.log(props.obj.date)
    return(
        <>
        <h5>Title : {props.obj.title}</h5>
        <h5>Amount : {props.obj.amt}</h5>
        <h5>Date : {props.obj.date.toLocaleString('en-US',{month:'long',year:'numeric'})}</h5>
        </>
    )
}
export default Disp