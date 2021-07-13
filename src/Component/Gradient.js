import React from 'react'
import {View,Text,StyleSheet,Image,TextInput} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {vh,vw,normalize} from '../Dimension/Dimension'

export default class Gradient1 extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
   
    return(
          <LinearGradient colors={['rgba(4,127,175,255)','rgba(4,127,175,255)']} 
          style={[styles.linerColor,
            {height:vh(this.props.height)},
            {width:vw(this.props.width)},
            {borderRadius:normalize(this.props.radius)},
            {marginTop:vw(this.props.mtp)},
            {opacity:this.props.opacity1?1:0.4}
          ]}
          start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}
          >
              <Text style={styles.textTitle}>{this.props.name}</Text>
          </LinearGradient>
    )
  }
}

const styles=StyleSheet.create({
  linerColor:{
      alignItems:'center',
      justifyContent:'center'
  },
  textTitle:{
      fontSize:normalize(15),
      color:'white',
      fontWeight:'bold'
  }
})