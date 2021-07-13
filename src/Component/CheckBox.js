import * as React from 'react';
import { View, Text,StyleSheet,TextInput,Image,TouchableOpacity } from 'react-native';
import CheckSelected from '../assets/assets/checkedcheckbox.png'
import CheckUnSelected from '../assets/assets/uncheckedcheckbox.png'

import {vh,vw,normalize,flexvalue} from '../Dimension/Dimension'
export default class CheckBox extends React.Component{
    constructor(props){
        super(props)
        this.state={imageeye:CheckUnSelected,check:false}
    }
    abc=()=>{
        
        if (this.state .imageeye==CheckSelected){
            
            this.setState({imageeye:CheckUnSelected,check:false},()=>this.props.xyz1(this.state.check))
        }
        else{
            this.setState({imageeye:CheckSelected,check:true},()=>this.props.xyz1(this.state.check))
        }
    }
    render(){
        return(
        <TouchableOpacity  onPress={this.abc}>
            <Image source={this.state.imageeye} style={styles.image}>

            </Image>

        </TouchableOpacity>
         ) }


}
const styles=StyleSheet.create({
//    button:{
//     height:vh(25),
//     width:vw(25),
    
    
//     // bottom:vh(40),
//     // right:vw(50)

//        },
    image:{
        height:vh(27),
    width:vw(27),
    marginRight:vw(10),
    //marginTop:vh(10)
    }
})