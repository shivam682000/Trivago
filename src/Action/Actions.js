import { exp } from 'react-native/Libraries/Animated/Easing'
import {CHANGE,CHANGEVISIBLE,CREATEHISTORY,CHANGESEARCHVISIBLE,CITYSELECTED,ADDFAVOURITES,CHANGEVISIBLEROOMS,DATACHANGE,ADD_USER,CHANGELOGGEDIN,CHANGELOGGEDIN2} from '../Action/ActionTypes'
export const changevisble=()=>{
    return{
        type:CHANGEVISIBLE
    }
}
export const changedate=(obj)=>{
    return{
        type:CHANGE,
        data:obj
    }
}
export const createhistory=(obj)=>{
    return{
        type:CREATEHISTORY,
        data:obj
        
    }
}

export const cityselected=(name)=>{
    return{
        type:CITYSELECTED,
        data:name
        
    }
}   
export const addfavourites=(obj)=>{
    return{
        type:ADDFAVOURITES,
        data:obj
    }
}
export const changevisblerooms=()=>{
    return{
        type:CHANGEVISIBLEROOMS
    }
}
export const datachange=(obj)=>{
    return{
        type:DATACHANGE,
        data:obj
    }
}


export const SignUp1=(obj1)=>{
    return{
      type:ADD_USER,
      obj:obj1
    }
}
export const changeloggednin=()=>{
    return{
      type:CHANGELOGGEDIN,
      
    }
}
export const changeloggednin2=()=>{
    return{
      type:CHANGELOGGEDIN2,
      
    }
}