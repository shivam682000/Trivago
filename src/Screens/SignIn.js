import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground,Image, TouchableOpacity,ScrollView } from 'react-native';
import { vh, vw, normalize, flexvalue } from '../Dimension/Dimension'
import Gradient1 from '../Component/Gradient'
import Cloud from '../assets/assets/graphic.png'
import CustomTextInput from '../Component/CustomTextInput2'
import CustomButton from '../Component/Button'
import EyeActive from '../Component/Eye'
import { SignUp1,changeloggednin } from '../Action/Actions'
import HomeScreen from '../Navigation/BottomTabBarNavigation';
import { connect } from 'react-redux'
import TrivagoLogo from '../assets/TrivagoSymbol/trivago-logo.png'
import FG from '../Component/GoogleFacebook'
import google from '../assets/assets/google.png'
import facebook from '../assets/assets/facebook.png'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '', password: '', show: true
            , isemailvalidate: '', ispasswordvalidate: '',
            isEmailValidateOverall: false, isPasswordValidateOverall: false
        }

    }



    _onchangetext = (email1) => {
        this.setState({ email: email1 })
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        this.setState({
            isEmailValidateOverall:
                reg.test(email1)
        })

    }
    _onchangetext1 = (Password1) => {
        this.setState({ password: Password1 })
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        this.setState({
            isPasswordValidateOverall:
                reg.test(Password1)
        })
    }
    abc = () => {
        this.props.navigation.navigate('ForgotPassword')
    }
    abc2 = () => {
        this.props.navigation.navigate('SignUp')
    }
    validate2 = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        !reg.test(this.state.email) ? this.setState({ isemailvalidate: "Enter Valid Email" }) :
            this.setState({ isemailvalidate: "" })

    }
    validate5 = () => {
        const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

        !reg.test(this.state.password)
            ? this.setState({ ispasswordvalidate: "Enter Valid Password" })
            : this.setState({ ispasswordvalidate: "" })
    }
    authenticate = () => {
        var i = 0;
        this.props.UserList.map((item) => {
            if (item.email === this.state.email &&
                item.password == this.state.password) {
                    
                this.props.navigation.navigate('BottomTabBar')
                this.props.action1()
                i = 1;
            }

        })
        if (i == 0) {
            alert('user does not exist')
        }
    }
    render() {
        console.log(this.state.isEmailValidateOverall,
            this.state.isPasswordValidateOverall, 'hello')
        return (
            
            <View style={styles.container}>
                
                <View style={styles.box1}>
                    <View style={styles.orangecolor}>

                    </View>
                    
                        <Image source={TrivagoLogo} style={styles.urlImage1} />
                  
                    <Text style={styles.welcometext}>
                        Welcome
                    </Text>


                </View >
                <View style={styles.box4}>
                    <CustomTextInput
                        placeholdername={'Email Address'}
                        onChangeText={this._onchangetext}
                        mtp={5}
                        value={this.state.email}
                        validate={this.validate2}
                        validatetext={this.state.isemailvalidate}
                        

                    />
                    <CustomTextInput
                        placeholdername={'Password'}
                        onChangeText={this._onchangetext1}
                        mtp={10}
                        secure={this.state.show}
                        value={this.state.password}
                        validate={this.validate5}
                        validatetext={this.state.ispasswordvalidate}
                        
                    />
                    <EyeActive xyz={(y) => this.setState({ show: y })} />

                    <Text style={styles.forgotpassword} onPress={this.abc} >Forgot Password?
         </Text>
                    <CustomButton
                        height={45}
                        width={315}
                        radius={5}
                        mtp={20}
                        name={"Submit"}
                        overall={this.state.isEmailValidateOverall &&
                            this.state.isPasswordValidateOverall}
                        onpress={this.authenticate}
                    />
                </View>
            <View style={styles.box3}>
                <FG color={'#1186b1'} textcolor={'#1186b1'} icon={facebook} title={'Sign In With Facebook'} mtp={15}/>
                <FG color={'#cc5e51'} textcolor={'#cc5e51'} icon={google} title={'Sign In With Google'} mtp={15}/>
                <View style={{flexDirection:'row',alignSelf:'center',marginTop:vh(14)}}>
                    <Text style={styles.signup1}>Don't have An Accout? </Text>
                    <TouchableOpacity onPress={this.abc2}>
                        <Text style={styles.signup}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
               



            </View>
            
            <View style={[styles.orangecolor,{position:'absolute',bottom:vh(-120),right:vw(-120),backgroundColor:'#027faf'}]}>

            </View>
            </View>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        UserList: state.SignUpReducer.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddUser: (obj) => dispatch(SignUp1(obj)),
        action1:()=>dispatch(changeloggednin())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
const styles = StyleSheet.create({
    container: {
        flex: 1,

        
    },
    box1: {
        flex: 0.29,

        

    },
    box3:{
        flex:0.35,
       
    },
   
    
    Welcome: {
        fontSize: normalize(16),
        marginTop: normalize(26),
        fontWeight: 'bold'
    },
    
    signup: {
        fontSize: normalize(15),
        color: '#f39003',
        
        
        fontWeight: '600'

    },
    signup1: {
        fontSize: normalize(15),
        color: 'black',
        
        
        fontWeight: '500'

    },
    box4: {
        flex: 0.37,
        
        paddingLeft:vw(30),
        
    },
    forgotpassword: {
        fontSize: normalize(17),
        alignSelf: 'flex-end',
        color: 'rgb(140,140,140)',
        marginRight: vw(30),
        fontWeight: 'bold',
        marginTop: vh(-20)

    },
    orangecolor: {
        height: vh(240),
        width: vw(240),
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
    welcometext: {
        color: "#027faf",
        fontSize: normalize(30),
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: vh(10),
        resizeMode:'contain'

    },
    urlImage1: {
        height: vh(26),
        width: vw(80),
        alignSelf:'center',
        resizeMode:'contain'

    },
})



