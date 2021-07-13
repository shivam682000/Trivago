import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput,Image } from 'react-native';
import TrivagoLogo from '../assets/assets/giphy.gif'
import { vh, vw, normalize } from '../Dimension/Dimension'
import {connect} from 'react-redux'
class Splash extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        {this.props.obj.loggedin?   setTimeout(()=>this.props.navigation.navigate('BottomTabBar'),2700)
            :setTimeout(()=>this.props.navigation.navigate('SignIn'),2700)}
     
        return(
            <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'white'}}>
                <Image source={TrivagoLogo} style={styles.urlImage1} />
            </View>
            
        )
    }
}

const styles=StyleSheet.create({
    urlImage1: {
        height: normalize(55),
        width: normalize(176),
        

    },
    
})
const mapStateToProps = (state) => {
    return {
        obj: state.SignUpReducer
    }
}
export default connect(mapStateToProps)(Splash)