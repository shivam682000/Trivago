import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Modal, Image ,Platform} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import left from '../assets/Calendar/left.png'
import right from '../assets/Calendar/right.png'
import { vh, vw, normalize } from '../Dimension/Dimension'
import betweendates from '../Utils/betweendates'
import CustomButton from '../Component/CustomButton'
import Month from '../Utils/utils'
import { connect } from 'react-redux'
import { changedate } from '../Action/Actions'
import IncDecButton from '../Component/IncDecButton'
import {changevisblerooms,datachange} from '../Action/Actions'

class GuestAndRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = { startingdate: '', endingdate: '' ,rooms:1,adults:2,childrens:0}
    
    }
    roomfunc=(rooms)=>{
        this.setState({rooms:rooms})
    }
    adultsfunc=(adults)=>{
        this.setState({adults:adults})
    }
    childrensfunc=(childrens)=>{
        this.setState({childrens:childrens})
    }
    
    transit = () => {
        let obj={rooms:this.state.rooms,adults:this.state.adults,childrens:this.state.childrens}
        this.props.action3(obj)
        
    }
    backbutton=()=>{
        this.props.action2()
    }
    render() {
       
        


        return (
            
            <Modal
                animationType="slide"
                style={{ flex: 1 }}
                visible={this.props.visi}

            >
                <View style={[styles.header,{flex:Platform.OS==='ios'?0.9:0.7}]}>
                    <View style={styles.innerbox1}>
                        <TouchableOpacity onPress={this.backbutton}>

                            <Image source={left} style={[styles.leftImage,{marginTop:Platform.OS==='ios'?vh(36):vh(24)}]} />
                        </TouchableOpacity>
                        <Text style={[styles.selectdatestext,{marginTop:Platform.OS==='ios'?vh(36):vh(24)}]}>Rooms and Guests</Text>
                    </View>


                </View>
                <View style={{ flex: 7 }}>
                    <View style={styles.RoomBox}>
                        <Text style={styles.Rooms}>Rooms</Text>
                        <IncDecButton count={this.state.rooms} xyz={(rooms)=>this.roomfunc(rooms)}/>
                    </View>
                    <View style={styles.Adults}>
                        <Text style={styles.text4}>ROOM</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Rooms}>Adults</Text>
                            <IncDecButton count={this.state.adults} xyz={(adults)=>this.adultsfunc(adults)}/>

                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={styles.Rooms}>Children</Text>
                            <IncDecButton count={this.state.childrens} xyz={(childrens)=>this.childrensfunc(childrens)}/>

                        </View>


                    </View>



                </View>
                <View style={[styles.lowerbox,{paddingVertical:Platform.OS==='ios'?vh(25):vh(45)}]}>

                    <View style={styles.applyButton}>
                        <CustomButton
                            h={40}
                            w={330}
                            r={3}
                            title={"Apply "}
                            color={'#007fac'}
                            textcolor={'white'}
                            size={15}
                            onpress={this.transit}
                        />
                    </View>




                </View>
            </Modal>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        obj1: state.roomreducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        action2: () => dispatch(changevisblerooms()),
        action3: (obj) => dispatch(datachange(obj)),

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(GuestAndRoom)


const styles = StyleSheet.create({
    leftImage: {
        height: vh(25),
        width: vw(25),
        
        marginLeft: vw(10)

    },
    header: {
       
        backgroundColor: "white",
        padding: normalize(5)
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
        marginTop: vh(35),
        marginLeft: vw(20),
        fontSize: normalize(20),
        //fontWeight:'bold'
    },
    lowerbox: {
        flex: 1,
       
       



    },
    abc1: {
        flex: 1,

        flexDirection: 'row',
        backgroundColor: "white",
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
    },
    abc2: {
        flex: 1.1,


    },
    checkin: {
        flex: 1,

    },
    checkout: {
        flex: 1.2,


    },
    text2: {
        marginLeft: vw(40),
        fontSize: normalize(15),
        fontWeight: 'bold',
        marginTop: vh(5),
        color: 'grey'
    },
    text3: {
        marginLeft: vw(40),
        fontSize: 20,
        fontWeight: '200',
        marginTop: 5,



    },
    applyButton: {
        alignItems: 'center',

    },
    RoomBox: {
        height: normalize(55),
        width: '90%',
        marginTop: vh(15),
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: normalize(10),
        backgroundColor: 'white',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        justifyContent: 'space-between'


    },
    Rooms: {
        fontSize: normalize(17),
        fontWeight: '300',
        marginLeft: vw(10),
        //marginTop:vh(15),

        flex: 1,
        alignSelf: 'center'
    },
    Adults: {
        height: normalize(140),
        width: '90%',
        marginTop: vh(15),
        alignSelf: 'center',

        borderRadius: normalize(10),
        backgroundColor: 'white',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,



    },
    text4: {
        fontWeight: '600',
        marginLeft: vw(10),
        marginTop: vh(8),
        fontSize: normalize(17)
    }

})
