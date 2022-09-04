import { useState } from 'react'
import './FrmPart.css'
function FrmPart(props){
    console.log(props)
    const [data,seData] = useState({
        title:'',
        amt:'',
        date:new Date()
    })
    function valChange(e){
        switch (e.target.name) {
            case 'title':
                seData({...data,title:e.target.value})
                break;
            case 'amt':
                    seData({...data,amt:e.target.value})
                    break;
            case 'date':
                seData({...data,date:e.target.value})
                break;
            default:
                break;
        }
    }
    function addec(e){
        e.preventDefault()
        props.rerun(data)
        seData({ title:'',
        amt:'',
        date:new Date()})
props.getintel(false)
    }
    function canceled(){
        props.getintel(false)
    }

    return(
        <>
        <div className='frmbackcol'>
            <div className='frminp'>
                <div className='parentfields'>
                    <label for="title">Title</label>
                <input type="text" name='title' value={data.title} onChange={valChange}></input>
                </div>
           <div className='parentfields parentfieldsamt'>
           <label for="amt">Amount</label>
                <input type="number" name='amt'value={data.amt}onChange={valChange}></input>
           </div>
              <div className='parentfields'>
              <label for="date">Date</label>
                <input type="date" name='date'value={data.date}onChange={valChange}></input>
              </div>
            </div>
            <div className='frmbtns'>
                <button className='frmcncl frmbtnsfoc' onClick={canceled}>Cancel</button>
                <button className='frmadd frmbtnsfoc' onClick={addec}>Add</button>
            </div>
        </div>
        </>
    )
}
export default FrmPart