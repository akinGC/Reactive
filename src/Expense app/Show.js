import './Show.css'
function Show(props){

   
    return(
        <>
        <div className='listouter'>
            <div className='listdate'>
              <span>{new Date(props.obj.date).toLocaleString('en-US',{month:'long'})}</span>
              <span>{new Date(props.obj.date).toLocaleString('en-US',{year:'numeric'})}</span>
              <span>{new Date(props.obj.date).toLocaleString('en-US',{day:'2-digit'})}</span>
            </div>
            <div className='listtexts'>
                <span>{props.obj.title}</span>
                <span className='amtdisplyd'>{props.obj.amt}</span>
            </div>
        </div>
        </>
    )
}
export default Show