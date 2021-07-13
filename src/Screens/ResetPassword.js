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
import EyeActive from '../Component/Eye'
export default class ResetPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = { show:true,password:'' }
    }
    abc = () => {
        this.props.navigation.navigate('ForgetPassword')
    }
    xyz = () => {
        this.props.navigation.navigate('SignIn')
    }
    
    _onchangetext1=(Password1)=>{
       this.setState({password:Password1})
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.abc}>
                    <Image
                        source={Close}
                        style={styles.close}
                    />
                </TouchableOpacity>
                <View style={styles.box1}>
                    <Text style={styles.forgotPassword}>
                        Reset Password
                    </Text>
                    <Gradient1
                        height={4}
                        width={25}
                        radius={2}
                        mtp={5}
                        opacity1={true}

                    />
                    <Text style={styles.information}>
                        Please set a new password for your account
                    </Text>
                    <CustomTextInput
                        placeholdername={'Password'}
                        onChangeText={this._onchangetext1}
                        mtp={10}
                        secure={this.state.show}
                        value={this.state.password}
                        validate={()=>{console.log('je')}}
                        // validatetext={this.state.ispasswordvalidate}

                    />
                    <EyeActive xyz={(y) => this.setState({ show: y })} />
                </View>
                <TouchableOpacity onPress={this.xyz}>
                    <LinearGradient colors={['#007faf', '#007faf']}
                        style={[styles.linerColor,
                        { height: normalize(60) },
                        { width: normalize(60) },
                        { borderRadius: normalize(30) },
                        { marginTop: vw(0) }
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
        marginRight: vw(42),
        color: 'rgb(89,89,89)',
        marginBottom:vh(20)
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
        height: vh(40),
        width: vw(44),
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

    }
})