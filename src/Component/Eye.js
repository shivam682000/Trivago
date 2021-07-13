import * as React from 'react';
import { View, Text,StyleSheet,TextInput,Image,TouchableOpacity } from 'react-native';

import Eyeenabled from '../assets/assets/eyeenabled.png'
import Eyedisabled from '../assets/assets/eyedisabled.png'
import {vh,vw,normalize,flexvalue} from '../Dimension/Dimension'
export default class EyeActive extends React.Component{
    constructor(props){
        super(props)
        this.state={imageeye:Eyedisabled,show:false}
    }
    abc=()=>{
        
        if (this.state .imageeye==Eyedisabled){
            console.log(this.state.imageeye,'eye')
            this.setState({imageeye:Eyeenabled,show:false},()=>this.props.xyz(this.state.show))
        }
        else{
            this.setState({imageeye:Eyedisabled,show:true},()=>this.props.xyz(this.state.show))
        }
    }
    render(){
        return(
        <TouchableOpacity style={styles.button} onPress={this.abc}>
            <Image source={this.state.imageeye} style={[styles.image,{tintColor:this.state.imageeye==Eyeenabled?'#007faf':'grey'}]}>

            </Image>

        </TouchableOpacity>
         ) }


}
const styles=StyleSheet.create({
   button:{
    height:normalize(27.5),
    width:normalize(35.5),
    
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end',
    bottom:normalize(52),
    right:normalize(50)

       },
    image:{
        height:normalize(13.5),
    width:normalize(23)
    }
})