import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { vh, vw, normalize } from '../Dimension/Dimension'
class CustomTextInput extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            
                <TextInput
                style={{height:vh(this.props.h),width:this.props.w,borderRadius:normalize(this.props.r),backgroundColor:'#ebecee',paddingLeft:vw(this.props.pl),marginLeft:vw(this.props.ml),color:'black',paddingVertical:vh(5),paddingBottom:vh(5)}}
                onChangeText={this.props.onChange}
                value={this.props.val}
                placeholder={this.props.title}
                onFocus={this.props.onFocus}
                ref={this.props.ref}
                autoFocus={this.props.focus}
                />

                

            
        )
    }
}
export default CustomTextInput;
const styles=StyleSheet.create({
    
})