import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Platform } from 'react-native';
import Left from '../assets/assets/left.png'
import { normalize, vh, vw } from '../Dimension/Dimension';
import Gradient1 from '../Component/Gradient'
import EyeActive from '../Component/Eye'
import CustomTextInput from '../Component/CustomTextInput2'
import LinearGradient from 'react-native-linear-gradient'
import Right from '../assets/assets/rightarrow.png'
import CheckBox from '../Component/CheckBox'
import { SignUp1 } from '../Action/Actions'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '', password: '', show: true,
            mobilenumber: '', username: '', Address: '', check: false,
            isemailvalidate: '', ispasswordvalidate: '', ismobilevalidate: '',
            isusernamevalidate: '', isaddressvalidate: '', isEmailValidateOverall: false,
            isUserNameValidateOverall: false, isMobileValidateOverall: false,
            isPasswordValidateOverall: false, isAddressValidateOverall: false
        }
    }
    _onchangetext1 = (email1) => {

        this.setState({ email: email1 })
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        this.setState({
            isEmailValidateOverall:
                reg.test(email1)
        })


    }
    _onchangetext2 = (Password1) => {
        this.setState({ password: Password1 })
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        this.setState({
            isPasswordValidateOverall:
                reg.test(Password1)
        })
    }
    _onchangetext3 = (number) => {
        this.setState({ mobilenumber: number })
        let reg = /^[0]?[789]\d{9}$/;
        this.setState({
            isMobileValidateOverall:
                reg.test(number)
        })
    }
    _onchangetext4 = (username1) => {
        this.setState({ username: username1 })
        let reg = /^\w[\w.]{2,18}\w$/;
        this.setState({
            isUserNameValidateOverall:
                reg.test(username1)
        })
    }
    _onchangetext5 = (xyz1) => {
        this.setState({ Address: xyz1 })
        this.setState({
            isAddressValidateOverall:
                xyz1.length > 8
        })
    }
    xyz2 = () => {
        this.props.navigation.navigate('SignIn')
    }
    validate1 = () => {
        let reg = /^\w[\w.]{2,18}\w$/;
        !reg.test(this.state.username) ? this.setState({ isusernamevalidate: "Enter Valid UserName" }) :
            this.setState({ isusernamevalidate: "" })

    }
    validate2 = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        !reg.test(this.state.email) ? this.setState({ isemailvalidate: "Enter Valid Email" }) :
            this.setState({ isemailvalidate: "" })

    }
    validate3 = () => {
        const reg = /^[0]?[789]\d{9}$/;
        !reg.test(this.state.mobilenumber)
            ? this.setState({ ismobilevalidate: "Enter Valid Mobile Number" })
            : this.setState({ ismobilevalidate: "" })
    }
    validate4 = () => {

        this.state.Address.length <=8
            ? this.setState({ isaddressvalidate: "Enter Valid Adrress" })
            : this.setState({ isaddressvalidate: "" })
    }
    validate5 = () => {
        const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

        !reg.test(this.state.password)
            ? this.setState({ ispasswordvalidate: "Enter Valid Password" })
            : this.setState({ ispasswordvalidate: "" })
    }
    dispatch1 = () => {
        let overall3 = (this.state.isEmailValidateOverall && this.state.isMobileValidateOverall &&
            this.state.isPasswordValidateOverall && this.state.isUserNameValidateOverall
            );
        if (!this.state.check) {
            alert('agree to term and condition')
        }
        else if (overall3) {
            this.props.AddUser({ ...this.state, id: Math.random() })
            this.props.navigation.navigate('SignIn')
        }
        else {
            alert('Fill the box Correctly')
        }

    }
    render() {
        let overall4 = (this.state.isEmailValidateOverall && this.state.isMobileValidateOverall &&
            this.state.isPasswordValidateOverall && this.state.isUserNameValidateOverall &&
            this.state.check);
        

        return (
            <View style={styles.container}>
                <View style={[styles.orangecolor,{position:'absolute',right:vh(-120),top:vh(0)}]}>

</View>
                <ScrollView>
                <View style={styles.box1}>
                    <TouchableOpacity onPress={this.xyz2}>
                        <Image
                            source={Left}
                            style={styles.left}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text1}>
                         TRIVAGO
                    </Text>

                </View>
                <View style={styles.box2}>
                    <Text style={styles.forgotPassword}>
                        Sign UP
                </Text>
                    <Gradient1
                        height={4}
                        width={25}
                        radius={2}
                        mtp={5}
                        opacity1={true}
                    />
                    <Text style={styles.information}>
                        Please fill the details below
            </Text>
                    <CustomTextInput

                        placeholdername={'User Name'}
                        onChangeText={this._onchangetext4}
                        mtp={20}
                        value={this.state.username}
                        validate={this.validate1}
                        validatetext={this.state.isusernamevalidate}
                    />
                    <CustomTextInput

                        placeholdername={'Email'}
                        onChangeText={this._onchangetext1}
                        mtp={10}
                        value={this.state.email}
                        validate={this.validate2}
                        validatetext={this.state.isemailvalidate}
                    />

                    <CustomTextInput

                        placeholdername={'Mobile Number'}
                        onChangeText={this._onchangetext3}
                        mtp={10}
                        keyboardType={"numeric"}
                        value={this.state.mobilenumber}
                        validate={this.validate3}
                        validatetext={this.state.ismobilevalidate}
                    />

                    
                    <CustomTextInput
                        placeholdername={'Password'}
                        onChangeText={this._onchangetext2}
                        mtp={10}
                        secure={this.state.show}
                        value={this.state.password}
                        validate={this.validate5}
                        validatetext={this.state.ispasswordvalidate}
                    />
                    <EyeActive xyz={(y) => this.setState({ show: y })} />


                </View>
                <View style={styles.box5}>
                    <View style={[styles.box7,{marginTop:Platform.OS==='ios'?vh(0):vh(0)}]}>
                        <CheckBox xyz1={(y) => this.setState({ check: y })} />
                        <Text style={styles.textstyle}>
                            I Agree to the
               </Text>
                        <Text style={[styles.textstyle,
                        { color: '#027faf', marginLeft: vw(2), marginRight: vw(2) }]}>
                            Term & Condition
               </Text>
                        <Text style={[styles.textstyle,
                        ]}>
                             of Trivago
               </Text>
                    </View>
                    <TouchableOpacity disabled={!overall4} onPress={this.dispatch1}>
                        <LinearGradient colors={['rgba(4,127,175,255)', 'rgba(4,127,175,255)']}
                            style={[styles.linerColor,
                            { height: normalize(60) },
                            { width: normalize(60) },
                            { borderRadius: normalize(30) },
                            { marginTop: vw(8) },
                            { opacity: overall4 ? 1 : 0.4 }
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


                </ScrollView>
                <View style={[styles.orangecolor,{position:'absolute',bottom:vh(-120),left:vw(0),backgroundColor:'#027faf'}]}>

               </View>


            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        UserList: state.SignUpReducer.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddUser: (obj) => dispatch(SignUp1(obj))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box1: {
        flex: 0.12,
        flexDirection: 'row'
    },
    box2: {
        flex: 0.58,
        paddingLeft: vw(30),
        


    },
    left: {
        height: vh(40),
        width: vw(35),
        marginTop: vh(40),
        marginLeft: vw(15),
        resizeMode:'contain',
        tintColor:'#007fac'
    },
    text1: {
        fontSize: normalize(25),
        color: '#f38e00',
        marginLeft: vw(15),
        marginTop: vh(42),
        fontWeight: 'bold'
    },
    information: {
        marginTop: vh(15),
        fontWeight: 'bold',
        fontSize: normalize(15),
        marginRight: vw(52),
        color: 'rgb(89,89,89)'
    },
    forgotPassword: {

        marginTop: vh(5),
        fontWeight: 'bold',
        fontSize: normalize(25)
    },
    imageright: {
        height: vh(40),
        width: vw(44),
        tintColor: 'white',

    },
    linerColor: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: vw(30)
    },
    box5: {
        flex: 0.30,
        paddingLeft: vw(30),
     

    },
    box7: {
        flexDirection: 'row',
        
    },
    textstyle: {
        fontSize: normalize(14),
        //marginTop: vh(10),



    },
    orangecolor: {
        height: normalize(240),
        width: normalize(240),
        borderRadius: normalize(120),
        backgroundColor: '#f39000',
        marginTop: vh(-120),
        marginLeft: vw(-120),
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5,


    },
})