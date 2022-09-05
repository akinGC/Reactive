import './Chart.css'
function ChartPoint(props){
   let per= 0
   if(props.end==0){
  per='0'
   }
   else{
    per = Math.round((props.end/props.sum)*100)

    per=per.toString()
   }
   console.log(per)
    return(
        <>
        <div className="outcyl">
            <div className="incyl"style={{height:per+'%'}}></div>
        </div>
        </>
    )
}
export default ChartPoint