import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { vh, vw, normalize } from '../Dimension/Dimension';
class Description extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <Text numberOfLines={5} style={styles.head3}>
                    {this.props.data}
                </Text>

            </View>
        )
    }
}
export default Description;
const styles=StyleSheet.create({
    head3:{
        color:'#6d7277',
        fontSize:normalize(15),
        fontWeight:'400',
        marginLeft:vw(15),
        marginTop:vh(15),
        marginRight:vw(17),
        
    },
    
})