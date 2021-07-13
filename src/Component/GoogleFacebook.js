import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput,Image } from 'react-native';
import { vh, vw, normalize } from '../Dimension/Dimension'
class FG extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <TouchableOpacity style={[styles.box,{borderColor:this.props.color,marginTop:this.props.mtp}]}>
                <Image source={this.props.icon} style={{height:normalize(22),width:normalize(22)}}/>
                <Text style={{marginLeft:vw(30),color:this.props.textcolor,fontSize:normalize(13),fontWeight:'500'}}>{this.props.title}</Text>

            </TouchableOpacity>
        )
    }
}
export default FG;
const styles=StyleSheet.create({
    box:{
        height:normalize(40),
        width:'80%',
        flexDirection:'row',
        borderWidth:1,
        borderRadius:normalize(5),
        alignSelf:'center',
        alignItems:'center',
        paddingLeft:vw(30)

    }
    
})