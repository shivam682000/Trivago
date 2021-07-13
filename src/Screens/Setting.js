import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Modal, FlatList,ScrollView } from 'react-native';
import { vh, vw, normalize, flexvalue } from '../Dimension/Dimension'
import TrivagoLogo from '../assets/TrivagoSymbol/trivago-logo.png'
import { language_list,Distance} from '../Main_Data/Main_Data'
import left from '../assets/Calendar/left.png'
import {connect} from 'react-redux'
import { SignUp1,changeloggednin ,changeloggednin2} from '../Action/Actions'
class Setting extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visible: false, languageobj: { language: 'India', text: "English" }, visible1: false ,distanceobj:{unit:'Kilometers',length:'Metric'}}
    }
    xyz = () => {
        this.setState({ visible: true })
    }
    xyz2 = () => {
        this.setState({ visible1: true })
    }
    press1 = (item) => {
        console.log(item, 'hello')
        this.setState({ languageobj: item, visible: false })
    }
    press2 = (item) => {
        console.log(item, 'hello')
        this.setState({ distanceobj: item, visible1: false })
    }
    _renderitem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.press1(item)}>
                <Text style={[styles.headingtext, { marginTop: vh(20) }]}>{item.language} </Text>
                <Text style={[styles.headingtext1, { marginTop: vh(5) }]}>{item.text}</Text>

            </TouchableOpacity>
        )
    }
    _renderitem2 = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.press2(item)}>
                <Text style={[styles.headingtext, { marginTop: vh(20) }]}>{item.length} </Text>
                <Text style={[styles.headingtext1, { marginTop: vh(5) }]}>{item.unit}</Text>

            </TouchableOpacity>
        )
    }
    signout=()=>{
        
        this.props.navigation.navigate('SignIn')
        this.props.action3()
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex:1}}>
                <Image source={TrivagoLogo} style={styles.urlImage1} />
                <Text style={[styles.text, { marginTop: vh(20) }]}>trivago Members have Acess to </Text>
                <Text style={[styles.text, { marginTop: vh(5) }]}>Special Rates.You Can too.</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text1}>
                        Become A Member
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={this.xyz}>
                    <Text style={[styles.headingtext,]} >Language</Text>
                    <Text style={styles.headingtext1}>{this.state.languageobj.text},{this.state.languageobj.language}</Text>
                </TouchableOpacity>
                <Text style={[styles.headingtext,]}>Currency</Text>
                <Text style={styles.headingtext1}>Dollar-$</Text>
                <TouchableOpacity onPress={this.xyz2}>

                <Text style={[styles.headingtext,]}>Distance Unit</Text>
                <Text style={styles.headingtext1}>{this.state.distanceobj.length}({this.state.distanceobj.unit})</Text>
                </TouchableOpacity>
                <Text style={[styles.headingtext, { fontSize: vh(19), marginTop: vh(20) }]}>Manage data privacy settings</Text>
                <Text style={[styles.headingtext, { marginTop: vh(20) }]}>Legal Information</Text>
                <Text style={[styles.headingtext, { marginTop: vh(20) }]}>Privacy Policy</Text>
                <Text style={[styles.headingtext, { marginTop: vh(20) }]}>Help Center</Text>
                <Text style={[styles.headingtext, { marginTop: vh(20) }]}>App Feedback</Text>
                <Text style={[styles.headingtext, { marginTop: vh(20) }]}>Third Party Licenses</Text>
                <TouchableOpacity style={styles.button} onPress={this.signout}>
                    <Text style={styles.text1}>
                        Sign Out
                    </Text>
                </TouchableOpacity>
                <Text style={[styles.headingtext1, { marginTop: vh(20) }]}>App Version 5.42.0</Text>
                <Modal
                    animationType="slide"
                    style={{ flex: 1 }}
                    visible={this.state.visible}

                >
                    <View style={[styles.header, { flex: Platform.OS === 'ios' ? 0.9 : 0.7 }]}>
                        <View style={styles.innerbox1}>
                            <TouchableOpacity onPress={() => this.setState({ visible: false })}>

                                <Image source={left} style={[styles.leftImage, { marginTop: Platform.OS === 'ios' ? vh(36) : vh(24) }]} />
                            </TouchableOpacity>
                            <Text style={[styles.selectdatestext, { marginTop: Platform.OS === 'ios' ? vh(36) : vh(24) }]}>Language</Text>
                        </View>


                    </View>
                    <View style={{ flex: 9 }}>
                        <FlatList
                            data={language_list}
                            renderItem={this._renderitem}
                            keyExtractor={(item, index) => index}
                        />

                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    style={{ flex: 1 }}
                    visible={this.state.visible1}>
                    <View style={[styles.header, { flex: Platform.OS === 'ios' ? 0.9 : 0.7 }]}>
                        <View style={styles.innerbox1}>
                            <TouchableOpacity onPress={() => this.setState({ visible1: false })}>

                                <Image source={left} style={[styles.leftImage, { marginTop: Platform.OS === 'ios' ? vh(36) : vh(24) }]} />
                            </TouchableOpacity>
                            <Text style={[styles.selectdatestext, { marginTop: Platform.OS === 'ios' ? vh(36) : vh(24) }]}>Distance Unit</Text>
                        </View>


                    </View>
                    <View style={{ flex: 9 }}>
                    <FlatList
                            data={Distance}
                            renderItem={this._renderitem2}
                            keyExtractor={(item, index) => index}
                    />


                    </View>

                </Modal>
                </ScrollView>
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       
        action3:()=>dispatch(changeloggednin2())
    }

}
export default connect(null, mapDispatchToProps)(Setting)
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    urlImage1: {
        height: normalize(38),
        width: normalize(122),
        marginTop: vh(60),
        alignSelf: 'center'

    },
    text: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    button: {
        height: vh(30),
        width: vw(140),
        backgroundColor: '#007fac',
        borderRadius: vh(6),
        alignSelf: 'center',
        marginTop: vh(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        color: 'white',
        fontWeight: '600',
        fontSize: normalize(13)
    },
    headingtext: {
        fontSize: vh(17),
        color: '#37454d',
        marginLeft: vw(13),
        fontWeight: '600',
        marginTop: vh(15)

    },
    headingtext1: {
        fontSize: vh(15),
        color: '#6c7277',
        marginLeft: vw(13),
        fontWeight: '500',
        marginTop: vh(2)


    },
    leftImage: {
        height: vh(25),
        width: vw(25),

        marginLeft: vw(10)

    },
    header: {

        backgroundColor: "white",
        padding: normalize(5),

    },
    innerbox1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "white",
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
    },
    selectdatestext: {

        marginLeft: vw(20),
        fontSize: normalize(20),
        //fontWeight:'bold'
    },

})