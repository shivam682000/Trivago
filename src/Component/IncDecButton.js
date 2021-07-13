import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput,Image } from 'react-native';
import { vh, vw, normalize } from '../Dimension/Dimension';
import plus from '../assets/afterDetailimage/plus.png'
import minus from '../assets/afterDetailimage/minus.png'
class IncDecButton extends React.Component{
    constructor(props){
        super(props)
        this.state={counter:this.props.count}
    }
    increase=()=>{

        this.setState({counter:this.state.counter+1},()=>this.props.xyz(this.state.counter))
    }
    decrease=()=>{
        if (this.state.counter>0)
       {  this.setState({counter:this.state.counter-1},()=>this.props.xyz(this.state.counter))
    }
    }
    
    render(){
        
        return(
            <View style={{flex:1,flexDirection:'row',height:vh(40),width:vw(40),justifyContent:'center',marginTop:vh(15)}}>
                <TouchableOpacity style={this.state.counter>0? styles.minusBox:styles.minusBox2} onPress={this.decrease} >
                    <Image source={minus} style={this.state.counter>0? styles.image:styles.image2} />

                </TouchableOpacity>
                <Text style={{marginLeft:vw(10),marginTop:vh(5),marginRight:vw(10),fontSize:normalize(15)}}>{this.state.counter}</Text>
                <TouchableOpacity style={styles.minusBox} onPress={this.increase}>
                    <Image source={plus} style={styles.image}/>

                </TouchableOpacity>


            </View>
        )
    }
}
export default IncDecButton;
const styles=StyleSheet.create({
    minusBox:{
        height:normalize(30),
        width:normalize(40),
        borderRadius:vh(15),
        borderWidth:1,
        borderColor:'#007fac',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height:vh(20),
        width:vw(20)
    },
    image2:{
        height:vh(20),
        width:vw(20),
        tintColor:'grey',
        
    },
    minusBox2:{
        height:normalize(30),
        width:normalize(40),
        borderRadius:vh(15),
        borderWidth:1,
        borderColor:'grey',
        justifyContent:'center',
        alignItems:'center'
    },
})