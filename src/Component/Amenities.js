import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { vh, vw, normalize } from '../Dimension/Dimension';
import ac from '../assets/Amenities/ac.png'
import gym from '../assets/Amenities/gym.png'
import parking from '../assets/Amenities/parking.png'
import pet from '../assets/Amenities/pet.png'
import pool from '../assets/Amenities/pool.png'
import spa from '../assets/Amenities/spa.png'
import wifi from '../assets/Amenities/wifi.png'
class Amenities extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.box}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {this.props.data.wifiinroom ? <Image source={wifi} style={styles.icon} />
                            :
                            <Image source={wifi} style={styles.icon1} />}
                        {this.props.data.wifiinroom ? <Text style={styles.text1}>Wifi in room</Text>
                            :
                            <Text style={styles.text2}>Wifi in room</Text>}


                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {this.props.data.wifiinlobby ? <Image source={wifi} style={styles.icon} />
                            :
                            <Image source={wifi} style={styles.icon1} />}
                        {this.props.data.wifiinlobby ? <Text style={styles.text1}>Wifi in lobby</Text>
                            :
                            <Text style={styles.text2}>Wifi in lobby</Text>}


                    </View>


                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {this.props.data.ac ? <Image source={ac} style={styles.icon} />
                            :
                            <Image source={ac} style={styles.icon1} />}
                        {this.props.data.ac ? <Text style={styles.text1}>A/C</Text>
                            :
                            <Text style={styles.text2}>A/C</Text>}


                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {this.props.data.gym ? <Image source={gym} style={styles.icon} />
                            :
                            <Image source={gym} style={styles.icon1} />}
                        {this.props.data.gym ? <Text style={styles.text1}>GYM</Text>
                            :
                            <Text style={styles.text2}>GYM</Text>}


                    </View>


                </View>
                <View style={{ flex: 1 ,flexDirection:'row'}}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {this.props.data.parking ? <Image source={parking} style={styles.icon} />
                            :
                            <Image source={parking} style={styles.icon1} />}
                        {this.props.data.parking ? <Text style={styles.text1}>Parking</Text>
                            :
                            <Text style={styles.text2}>Parking</Text>}


                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {this.props.data.pool ? <Image source={pool} style={styles.icon} />
                            :
                            <Image source={pool} style={styles.icon1} />}
                        {this.props.data.pool ? <Text style={styles.text1}>Swimming Pool</Text>
                            :
                            <Text style={styles.text2}>Swiming Pool </Text>}


                    </View>


                </View>


            </View>
        )
    }
}
export default Amenities;
const styles = StyleSheet.create({
    box: {
        height: normalize(140),
        width: '100%',
        
        marginTop:vh(20)
    },
    icon: {
        height: vh(20),
        width: normalize(20),
        marginLeft:vw(15)
    },
    icon1: {
        height: normalize(20),
        width: normalize(20),
        tintColor: 'lightgrey',
        marginLeft:vw(15)
    },
    text1: {
        fontSize: normalize(15),
        fontWeight: '500',
        marginLeft:vw(10)

    },
    text2: {
        fontSize: normalize(15),
        fontWeight: '500',
        color: 'lightgrey',
        marginLeft:vw(10)

    }
})