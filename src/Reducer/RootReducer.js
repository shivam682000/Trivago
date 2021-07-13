import { combineReducers } from "redux";
import {DateReducer,location,roomreducer,SignUpReducer} from '../Reducer/DateReducer'

const RootReducer=combineReducers({ DateReducer,location,roomreducer,SignUpReducer });
export default RootReducer
