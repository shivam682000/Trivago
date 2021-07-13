import * as React from 'react';
import {
    View, Text, StyleSheet, ImageBackground
    , Image, TouchableOpacity,Modal
} from 'react-native';
import Gradient1 from '../Component/Gradient'
import { vh, vw, normalize, flexvalue } from '../Dimension/Dimension'
import Close from '../assets/assets/close.png'
import CustomTextInput from '../Component/CustomTextInput2'
import LinearGradient from 'react-native-linear-gradient'
import Right from '../assets/assets/rightarrow.png'
import CheckGreen from '../assets/assets/checked.png'
export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state={ModalVisible:false,mobilenumber:'',
        isMobileValidateOverall:false,ismobilevalidate:''}
    }
    abc = () => {
        this.props.navigation.goBack()
    }
    xyz=()=>{
        this.setState({ModalVisible:true})
    }
    xyz2=()=>{
        this.setState({ModalVisible:false})
        this.props.navigation.navigate('Otp',{number:this.state.mobilenumber})
    }
    _onchangetext = (number) => {
        this.setState({ mobilenumber: number })
        let reg = /^[0]?[789]\d{9}$/;
        this.setState({isMobileValidateOverall:
            reg.test(number)})
    }
    
    render() {
        const {isMobileValidateOverall}=this.state;
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
                        Forgot Password
                    </Text>
                    <Gradient1
                        height={4}
                        width={25}
                        radius={2}
                        mtp={5}
                        opacity1={true}

                    />
                    <Text style={styles.information}>
                        Don’t worry just enter the  
                        mobile number associated with your account.
                    </Text>
                    <CustomTextInput

                        placeholdername={'Mobile Number'}
                        onChangeText={this._onchangetext}
                        mtp={33}
                        keyboardType={"numeric"}
                        value={this.state.mobilenumber}
                        validate={()=>{console.log('je')}}
                        

                    />
  
                </View>
                <TouchableOpacity disabled={!isMobileValidateOverall} 
                onPress={this.xyz}> 
                <LinearGradient colors={['#007faf', '#007faf']}
                    style={[styles.linerColor,
                    { height: normalize(60) },
                    { width: normalize(60) },
                    { borderRadius: normalize(30) },
                    { marginTop: vw(30) },
                    {opacity:isMobileValidateOverall?1:0.4}
                    ]}
                    start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}
                >
                    <Image source={Right}
                        style={styles.imageright}
                    >

                    </Image>
                </LinearGradient>
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.state.ModalVisible}
                  onRequestClose={() => {
                    
                    this.setState(
                        {ModalVisible:false});
                  }}
                >
                    <View style={styles.modalcontainer}>
                        <View style={styles.mainbox}>
                            <Image source={CheckGreen}
                                   style={styles.checkgreen}
                            >

                            </Image>
                            <Text style={styles.link}>
                                Link Sent
                            </Text>
                            <Text style={styles.content}>
                            A verification link has been sent to your
                            </Text>
                            <Text style={[styles.content,{marginTop:vh(5)}]}>
                                registered email address
 
                            </Text>
                            <Text style={styles.okay}
                            onPress={this.xyz2}
                            >
                                Okay
                            </Text>

                        </View>

                    </View>

                </Modal>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    close: {
        height: vh(21),
        width: vw(21),
        marginTop: vh(45),
        marginLeft: vw(14.5)
    },
    forgotPassword: {
        fontWeight:'bold',
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
        height: vh(40),
        width: vw(44),
        tintColor: 'white',

    },
    modalcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    mainbox:{
        height:normalize(270),
        width:normalize(330),
        
        marginBottom:vh(77),
        backgroundColor:'white',
        borderRadius:vh(10)
    },
    checkgreen:{
        height:normalize(80),
        width:normalize(80),
        alignSelf:'center',
        marginTop:vh(26),
        tintColor:'#007faf'
    },
    link:{
        fontSize:normalize(16),
        marginTop:vh(26),
        fontWeight:'bold',
        alignSelf:'center'
    },
    content:{
        fontSize:normalize(14),
        color:'rgb(89,89,89)',
        alignSelf:'center',
        marginTop:vh(14.5),
        // marginLeft:vw(44),
        // marginRight:vw(44)
    },
    okay:{
        fontSize:normalize(18),
        color:'#007faf',
        alignSelf:'center',
        marginTop:vh(30),
        fontWeight:'bold'

    }
})