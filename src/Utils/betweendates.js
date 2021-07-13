const betweendates=(start,end)=>{
    let startdate=parseInt(start.slice(8,10));
    let enddate=parseInt(end.slice(8,10))
    let startmonth=parseInt(start.slice(5,7))
    let endmonth=parseInt(end.slice(5,7))
    let arr={};
    if (startdate<enddate && startmonth==endmonth){
        
        for (let index = startdate; index < enddate+1; index++) {
            let a=start.slice(0,8)
            let f=String(index)
            if (f.length===1){
                f='0'+f
            }
            let q=a+f
            let y=q.split();
            if (index===startdate){
            
            arr[y]={startingDay: true, color: '#007fac',textColor:'white'}
        }
            else if (index===enddate){
            
            arr[y]={endingDay: true, color: '#007fac',textColor:'white'}
            }
            else{
                arr[y]={color: '#007fac',textColor:'white'}
            }
           
            
            
        }
    }
    
    return arr

}
export default betweendates;