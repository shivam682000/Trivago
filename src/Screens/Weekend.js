import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput,Image } from 'react-native';
import hotel1 from '../assets/TrivagoSymbol/hotel1.gif'
import { vh,vw } from '../Dimension/Dimension';
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Image source={hotel1} style={{height:vh(200),width:vw(200)}}/>

            </View>
        )
    }
}
export default App;
const styles=StyleSheet.create({
    
})