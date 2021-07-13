import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput,Image } from 'react-native';
import searching from '../assets/TrivagoSymbol/hotel.gif'
import { vh, vw, normalize } from '../Dimension/Dimension'
import {connect} from 'react-redux'
class SearchingGif extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
          setTimeout(()=>this.props.navigation.navigate('DetailPage'),3000)
            
     
        return(
            <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'#efefef'}}>
                <Image source={searching} style={styles.urlImage1} />
            </View>
            
        )
    }
}

const styles=StyleSheet.create({
    urlImage1: {
        height: normalize(250),
        width: normalize(250),
        

    },
    
})
const mapStateToProps = (state) => {
    return {
        obj: state.SignUpReducer
    }
}
export default connect(mapStateToProps)(SearchingGif)