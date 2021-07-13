import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { vh, vw, normalize } from '../Dimension/Dimension'
class CustomButton extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex:1}}>
                <TouchableOpacity onPress={this.props.onpress} style={{
                    
                    height:vh(this.props.h),
                    width:vw(this.props.w),
                    borderRadius:normalize(this.props.r),
                    backgroundColor:this.props.color,
                    justifyContent:'center',
                    alignItems:'center'
                }} >
                    <Text style={{color:this.props.textcolor,
                    fontSize:normalize(this.props.size),
                    fontWeight:"bold"
                    }}>{this.props.title}</Text>

                </TouchableOpacity>

            </View>
        )
    }
}
export default CustomButton;
const styles=StyleSheet.create({
    
})