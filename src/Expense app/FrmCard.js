import './FrmPart.css'
function FrmCard(props){

    return(
        <>
<div className='frmcrdout'>
    <button className='frmcrdbtn' onClick={()=>{
        props.frmstate(true)
    }}>Add New Expense</button>
</div>
        </>
    )
}
export default FrmCard