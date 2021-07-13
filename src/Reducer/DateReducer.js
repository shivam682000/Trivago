import { exp } from 'react-native/Libraries/Animated/Easing';
import {CHANGE,CHANGEVISIBLE,CREATEHISTORY,CITYSELECTED,ADDFAVOURITES,CHANGEVISIBLEROOMS,DATACHANGE,ADD_USER,CHANGELOGGEDIN,CHANGELOGGEDIN2} from '../Action/ActionTypes';
const StartingDate = new Date().toString() 
console.log(StartingDate,'hello shivam')
const date = StartingDate.slice(8,10)

const currentdate = parseInt(date)
let nextdate = currentdate + 1;
nextdate=nextdate.toString()

const month1 = StartingDate.slice(4,7)
import Month from '../Utils/utils';
const Monthstring=Month(month1)
const s=date+" "+month1;
const e=nextdate+" "+month1;
const INITIAL_STATE={visible:false,startingdate:s,endingdate:e}
const INITIAL_STATE2={details:{rooms:1,adults:2,childrens:0},visiblerooms:false}
function checkinlist(list,obj) {
    let arrayLength=list.length
    for (var i = 0; i < arrayLength; i++) {
        if (list[i].name===obj.name ){
            return true
        }
    return false
        
    }  
    
}
export  const roomreducer=(state=INITIAL_STATE2,action)=>{
       switch(action.type){
        case CHANGEVISIBLEROOMS:
            return {
                ...state,
                visiblerooms:!state.visiblerooms
            }
         case DATACHANGE:
             return{
                 ...state,
                 visiblerooms:false,
                 details:action.data
             }
             default:
                return state;
       }
}
export const DateReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case CHANGE:
            state=action.data;
            return{
                ...state,


            }
        case CHANGEVISIBLE:
            return{
                ...state,
                visible:!state.visible
            }
       
        default:
            return state;
    }

}
import {populardestination,citylist,Main_Data} from '../Main_Data/Main_Data'
// import { act } from 'react-test-renderer';
const INITIAL_STATE1={
    historyarray:[],
    populardestinationlist:populardestination,
    citylist1:citylist,
    
    cityname:'',
    overalldata:Main_Data,
    list:[],
}
export const location=(state=INITIAL_STATE1,action)=>{
    switch (action.type) {
        case CREATEHISTORY:
            let arr=state.historyarray.push(action.data)
            return{
                ...state,
                historyarray:arr
            }
        case ADDFAVOURITES:
            

            let list1=[...state.list]
            let y=checkinlist(list1,action.data)
            console.log(y,'hat na ')
            if (!y){
                
                list1.push(action.data)
            }
            else{
                
                list1=list1.filter(item=>{
                   return item.name!==action.data.name && item.hotelid !== action.data.hotelid
                })
            }
            
            return{
                ...state,
                list:list1
            }
        
        case CITYSELECTED:
            return{
                ...state,
            cityname:action.data
            }
        default:
            return state;
    }

}

const INITIAL_STATE4={
    data:[{email:'sh123@gmail.com',password:'Shivam123@',mobilenumber:'',loggedin:false}],
    loggedin:false
}
export const SignUpReducer=(state=INITIAL_STATE4,action)=>{
    switch (action.type) {
        case ADD_USER:
            let data2=[...state.data]
            data2.push(action.obj)
            return{
                ...state,
                data:data2
            }
        case CHANGELOGGEDIN:
            
            return{...state,
            loggedin:true}
        case CHANGELOGGEDIN2:
            
            return{...state,
            loggedin:false}
    
        default:
            return state
    }
}