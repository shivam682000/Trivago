import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { vh, vw, normalize } from '../Dimension/Dimension'
import Heart from '../assets/DetailIcon/heartw.png'
import Heartc from '../assets/DetailIcon/heartred.png'
class BookMark2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { image: Heart }
    }
    onpress = () => {
        if (this.state.image == Heart) {
            this.setState({ image: Heartc })
        }
        else {
            this.setState({ image: Heart })
        }
    }
    render() {
        return (

                <TouchableOpacity style={styles.button} onPress={this.onpress}>
                    <Image source={this.state.image} style={styles.image} />
                </TouchableOpacity>

           
        )
    }
}
export default BookMark2;
const styles = StyleSheet.create({
    box: {
        height: vh(45),
        width: vw(45),
        borderRadius: normalize(22.5),
        backgroundColor: '#373e45',
        opacity: 0.5,
        position: 'absolute',
        right: vw(20),
        marginTop: vh(12),
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: vh(30),
        width: vw(30),
        // position: 'absolute',
        // right: vw(27),
        // top: vh(20)

    },
    button:{
        position:'absolute',
        right: vw(20),
        top: vh(45)

    }
})