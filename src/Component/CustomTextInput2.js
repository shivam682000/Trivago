import * as React from 'react';
import { View, Text,StyleSheet,TextInput } from 'react-native';
import {vh,vw,normalize,flexvalue} from '../Dimension/Dimension'
class CustomTextInput extends React.Component{
  constructor(props){
    super(props)
    this.state={isfocusssed:false}
  }
  handlefocus=()=>{
   this.setState({isfocusssed:true})
  }
  handleblur=()=>{
    this.setState({isfocusssed:false},()=>this.props.validate())
    
  }
  render(){
    
    return (
      <View>
      <TextInput
       style={[styles.input,{marginTop:vh(this.props.mtp),
        borderColor:this.state.isfocusssed?'rgba(2,127,175,255)':'transparent',
        
      }]}
       placeholder={this.props.placeholdername}
       onChangeText={this.props.onChangeText}
       onFocus={this.handlefocus}
       onBlur={this.handleblur}
       secureTextEntry={this.props.secure}
       value={this.props.value}
       keyboardType={this.props.keyboardType}

      />
      <Text>
          {this.props.validatetext?this.props.validatetext:''}
        </Text>
      </View>
      
    );
  }
}
const styles=StyleSheet.create({
  input:{
    height:vh(55),
    width:vw(315),
    
    borderWidth:1,
    padding:vh(15.5),
    borderRadius:normalize(5),
    color:'rgb(140,140,140)',
    fontSize:normalize(15),
    fontWeight:'bold',
    backgroundColor:'lightgrey',
    
  }
})

export default CustomTextInput;
