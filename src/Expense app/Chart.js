import './Chart.css'
import ChartPoint from './ChartPoint'
function Chart(e){
    let ary2=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let arsum = 0
    e.ary.forEach(element => {
        arsum+=element
    });
    return(
        <>
        <div className='outer-box'>
        
            <div className='flexgpnts_outer'>
                
                   
                      <div className='flexgpnts'>
                      {  e.ary.map((end)=>(
                         <div><ChartPoint end={end} sum={arsum}/></div>
                      ))}
                       
                      </div>

                
           
         <div className='flexgpnts'>
         {
                ary2.map((val)=>(
                    <div>{val}</div>
                ))
                }
         </div>
            </div>
      
        </div>
        </>
    )
}
export default Chart