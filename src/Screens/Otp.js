import * as React from 'react';
import {
    View, Text, StyleSheet, ImageBackground
    , Image, TouchableOpacity, Modal
} from 'react-native';
import Gradient1 from '../Component/Gradient'
import { vh, vw, normalize, flexvalue } from '../Dimension/Dimension'
import Close from '../assets/assets/close.png'
import CustomTextInput from '../Component/CustomTextInput2'
import LinearGradient from 'react-native-linear-gradient'
import Right from '../assets/assets/rightarrow.png'
import CheckGreen from '../assets/assets/CheckGreen.png'
export default class Otp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { timer: 20,otp:'',otpvalidate:false }
    }
    abc1 = () => {
        this.props.navigation.navigate('SignIn')
    }
    countDown = () => {
        if (this.state.timer == 0) {
            clearInterval(this.a);
        }
        else {
            this.setState({ timer: this.state.timer - 1 })
        }

    }
    a = setInterval(this.countDown, 1000)


    abc = () => {
        this.setState({ timer: 20 })
        setInterval(this.countDown, 1000)
    }
xyz=()=>{
    this.props.navigation.navigate("ResetPassword")
}
_onchangetext=(otp1)=>{
    this.setState({otp:otp1})
    let y=otp1.lenghth===6;
    this.setState({otpvalidate:y})
}
    render() {
        const {number}=this.props.route.params;
        return (
            <View>
                <TouchableOpacity onPress={this.abc1}>
                    <Image
                        source={Close}
                        style={styles.close}
                    />
                </TouchableOpacity>
                <View style={styles.box1}>
                    <Text style={styles.forgotPassword}>
                        OTP Verification
                    </Text>
                    <Gradient1
                        height={4}
                        width={25}
                        radius={2}
                        mtp={5}

                    />
                    <Text style={styles.information}>
                        Please enter the 6 digit verification code sent to
                        you on {number}
                    </Text>
                    <CustomTextInput

                        placeholdername={'Enter Otp'}
                        onChangeText={this._onchangetext}
                        mtp={25}
                        value={this.state.otp}
                        keyboardType={'numeric'}
                        validate={()=>{console.log('je')}}
                    />
                    <Text>{this.state.otpvalidate?'should be of 6 length':''}</Text>
                   
                </View>
                <View style={{ paddingLeft: 35 }}>
                    {this.state.timer != 0 ?
                        <Text style={styles.otp}>
                            {this.state.timer}
                        </Text> :
                        <Text style={styles.otp}
                            onPress={this.abc}
                        >
                            Resend Otp
                </Text>
                    }
                </View>
                <TouchableOpacity disabled={this.state.otpvalidate} onPress={this.xyz}>
                    <LinearGradient colors={['#007faf', '#007faf']}
                        style={[styles.linerColor,
                        { height: normalize(60) },
                        { width: normalize(60) },
                        { borderRadius: normalize(30) },
                        { marginTop: vh(-5) },
                        {opacity:this.state.otpvalidate?0.3:1}
                        ]}
                        start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}
                    >
                        <Image source={Right}
                            style={styles.imageright}
                        >

                        </Image>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    close: {
        height: normalize(21),
        width: normalize(21),
        marginTop: vh(40),
        marginLeft: vw(14.5)
    },
    forgotPassword: {
        fontWeight: 'bold',
        marginTop: vh(45),

        fontSize: normalize(25)
    },
    information: {
        marginTop: vh(15),

        fontSize: normalize(15),
        marginRight: vw(52),
        color: 'rgb(89,89,89)'
    },
    box1: {
        paddingLeft: vw(30)
    },
    linerColor: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: vw(30)
    },
    imageright: {
        height: normalize(40),
        width: normalize(44),
        tintColor: 'white',

    },
    modalcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    mainbox: {
        height: vh(270),
        width: vw(330),

        marginBottom: vh(64),
        backgroundColor: 'white',
        borderRadius: vh(10)
    },
    checkgreen: {
        height: vh(80),
        width: vw(80),
        alignSelf: 'center',
        marginTop: vh(26)
    },
    link: {
        fontSize: normalize(16),
        marginTop: vh(26),
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    content: {
        fontSize: normalize(14),
        color: 'rgb(89,89,89)',
        alignSelf: 'center',
        marginTop: vh(14.5),
        // marginLeft:vw(44),
        // marginRight:vw(44)
    },
    okay: {
        fontSize: normalize(18),
        color: 'rgb(1,167,163)',
        alignSelf: 'center',
        marginTop: vh(30),
        fontWeight: 'bold'

    },
    otp:{
        fontSize:normalize(16),
        color:'#007faf',
        marginTop:vh(15),
        fontWeight:'bold'

    }
})