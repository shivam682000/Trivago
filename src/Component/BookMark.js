import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { vh, vw, normalize } from '../Dimension/Dimension'
import Heart from '../assets/DetailIcon/heartw.png'
import Heartc from '../assets/DetailIcon/heartred.png'
class BookMark extends React.Component {
    constructor(props) {
        super(props)
        this.state = { image: Heart,check:false }
    }
    onpress = () => {
        if (this.state.image == Heart) {
            this.setState({ image: Heartc ,check:true},()=>this.props.xyz(this.state.check))
        }
        else {
            this.setState({ image: Heart ,check:false},()=>this.props.xyz(this.state.check))
        }
    }
    render() {
        
        return (
            <View style={styles.box}>
                <TouchableOpacity style={styles.button} onPress={this.onpress}>
                    <Image source={this.state.image} style={styles.image} />
                </TouchableOpacity>

            </View>
        )
    }
}
export default BookMark;
const styles = StyleSheet.create({
    box: {
        height: vw(45),
        width: vw(45),
        borderRadius: vw(22.5),
        backgroundColor: '#373e45',
        opacity: 0.5,
        position: 'absolute',
        right: vw(20),
        marginTop: vh(12),
        justifyContent: 'center',

        alignItems: 'center',
        
    },
    image: {
        height: vh(30),
        width: vw(30),
        // position: 'absolute',
        // right: vw(27),
        // top: vh(20)
       resizeMode:'center'
    },
    button:{
        position:'absolute',
        right: vw(7.7),
        top: vh(8.2)

    }
})