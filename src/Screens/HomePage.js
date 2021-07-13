import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { vh, vw, normalize } from '../Dimension/Dimension'
import TrivagoLogo from '../assets/TrivagoSymbol/trivago-logo.png'
import CustomTextInput from '../Component/CustomTextInput'
import Month from '../Utils/utils'
import CalendarList1 from '../Component/Calendar'
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio';
import CustomButton from '../Component/CustomButton'
import {connect} from 'react-redux'
import {changevisble,changesearchvisible} from '../Action/Actions'
import SearchEngine from '../Component/SearchEngine'
import DetailPage from '../Screens/DetailPage'
import GuestAndRoom from '../Component/GuestAndRoom'
import {changevisblerooms} from '../Action/Actions'

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        
    }
    
    calendar = () => {
        this.props.action1()
        
    }
    back = () => {
        this.props.action1()
        
    }
    focus=()=>{
        this.props.navigation.navigate('SearchEngine')

    }
    _press=()=>{
        let objhistory={startingdate:this.props.obj1.startingdate,endingdate:this.props.obj1.endingdate,cityname:this.props.obj2.cityname}
        if (this.props.obj2.cityname.length===0){
            alert("Select City")
        }
        else{
        this.props.navigation.navigate('SearchingGif')}
    }
    action4=()=>{
        this.props.action3()
    }
    render() {

       console.log(this.props.obj1)

        return (
            <View style={styles.container}>
                <View style={styles.box1}>
                    <Image source={TrivagoLogo} style={styles.urlImage1} />
                </View>
                <View style={styles.box2}>
                    <View style={styles.InputBox}>
                        <Text style={styles.DestinationText}>Destination</Text>
                        <CustomTextInput
                            h={34}
                            r={20}
                            pl={15}
                            ml={13}
                            w={'92%'}
                            title={'Choose A Destination'}
                            onFocus={this.focus}
                            val={this.props.obj2.cityname}
                        />
                        <View style={{height:0.5,width:'90%',backgroundColor:'lightgrey',marginLeft:vw(10),marginTop:vh(10)}}></View>
                        <View style={styles.datesandRooms}>
                            
                            <TouchableOpacity style={styles.dates} onPress={this.calendar}>
                                
                                    <Text style={[styles.DateText,{marginLeft:14}]}>Dates</Text>
                                    <Text style={[styles.text1,{marginLeft:14}]}>{this.props.obj1.startingdate} - {this.props.obj1.endingdate}</Text>
                               


                            </TouchableOpacity>
                            <View style={{transform:[{rotate:'90deg'}],height:0.7,width:'11%',backgroundColor:'lightgrey',marginTop:vh(22)}}></View>

                            <TouchableOpacity style={styles.Rooms} onPress={this.action4}>
                                <Text style={[styles.DateText, ]}>Rooms</Text>
                                <Text style={[styles.text1]}>{this.props.obj3.details.adults+this.props.obj3.details.childrens} guests, {this.props.obj3.details.rooms} room</Text>

                            </TouchableOpacity>
                            

                            
                        </View>
                        <View style={{height:0.8,width:'90%',backgroundColor:'lightgrey',marginLeft:vw(10),marginBottom:vh(5)}}></View>
                        
                        <View style={{ alignItems: 'center',marginTop:5 }}>
                            <CustomButton
                                h={45}
                                w={330}
                                r={5}
                                title={"Search"}
                                color={'#007fac'}
                                textcolor={'white'}
                                size={15}
                                onpress={this._press}
                            />
                        </View>




                    </View>

                </View>
                <View style={styles.box3}>

                </View>
                <CalendarList1
                    visible={this.props.obj1.visible}
                    onpress={this.back}
                />
                {/* <SearchEngine
                xyz={this.props.obj2.visible}
                /> */}

             {/* <DetailPage/> */}
             <GuestAndRoom
             visi={this.props.obj3.visiblerooms}
             />
            </View>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
     obj1:state.DateReducer,
     obj2:state.location,
     obj3:state.roomreducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        action1:()=>dispatch(changevisble()),
        action2:()=>dispatch(changesearchvisible()),
        action3:()=>dispatch(changevisblerooms())
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    urlImage1: {
        height: normalize(38),
        width: normalize(122),
        marginTop:vh(40)

    },
    box1: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box2: {
        flex: 2.3,
        // justifyContent:'center',
        // alignItems:'center',

        padding: 5,
        paddingHorizontal: 8
    },
    box3: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',

    },
    InputBox: {
        backgroundColor: "white",
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,

        flex: 1,
        borderRadius: 10
    },
    DestinationText: {
        color: '#9ca3a7',
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: vw(15),
        marginTop: vh(15),
        marginBottom: vh(5)
    },
    datesandRooms: {
        flexDirection: 'row',
        height:vh(50),
        width:"100%",
        
        marginTop:5

        //padding: vh(15)

    },
    dates: {


        height: vh(50),
        width: '45%',
        
        



    },
    Rooms: {


        height: vh(50),
        width: '45%',
    
        
       
        


    },
    
    DateText: {
        color: '#9ca3a7',
        fontWeight: 'bold',
        fontSize: normalize(12),
    },
    text1: {
        fontSize: normalize(15),
        fontWeight: "500",
        color: '#37464d',
        marginTop: 5
    }
})
