import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Modal, Image,Platform } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import left from '../assets/Calendar/left.png'
import right from '../assets/Calendar/right.png'
import { vh, vw, normalize } from '../Dimension/Dimension'
import betweendates from '../Utils/betweendates'
import CustomButton from '../Component/CustomButton'
import Month from '../Utils/utils'
import { connect } from 'react-redux'
import {changedate} from '../Action/Actions'
class Calend extends React.Component {
    constructor(props) {
        super(props)
        this.state = { startingdate: '', endingdate: '' }
    }
    dayDecider = (day) => {
        
        let y = day.dateString;
        
        if (this.state.startingdate === '') {
            this.setState({ startingdate: y })

        }
        else if ((this.state.endingdate.length === 0) && (parseInt(this.state.startingdate.slice(8, 10)) < parseInt(y.slice(8, 10))) && (parseInt(this.state.startingdate.slice(5, 7)) <= parseInt(y.slice(5, 7))) ){
            console.log('h')
            this.setState({ endingdate: y })
        }
        else if (this.state.endingdate !== '' && this.state.startingdate !== '') {
            this.setState({ startingdate: y, endingdate: '' })
        }
        else {
            this.setState({ startingdate: y })
        }
    }
    transit = () => {
        
        if (this.state.startingdate.length !== 0 && this.state.endingdate.length !== 0) {
            let y = this.state.startingdate;
            let x = this.state.endingdate;
            let date = y.slice(8, 10)
            let string = Month(y.slice(5, 7))
            let dateformat = date + ' ' + string;

            let date1 = x.slice(8, 10)
            let string1 = Month(x.slice(5, 7))
            let dateformat1 = date1 + ' ' + string1;
            let obj1 = {visible:false,
                startingdate: dateformat, endingdate: dateformat1
            }
            //let obj2={Name:t}
            this.props.action2(obj1)
            this.props.navigation.navigate('HomePage')

        }
    }
    render() {
        console.log(this.state.startingdate,this.state.endingdate)
        let x = this.state.startingdate;
        let c = this.state.endingdate;
        let arr = betweendates(x, c);
        let a1 = x.slice(8, 10)
        let startmonth3 = Month(x.slice(5, 7))
        let a2 = c.slice(8, 10)
        let startmonth4 = Month(c.slice(5, 7))


        return (
            <View style={{flex:1}}>
            
                <View style={[styles.header,{flex:Platform.OS==='ios'?0.9:0.7}]}>
                    <View style={styles.innerbox1}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomePage')}>

                            <Image source={left} style={[styles.leftImage,{marginTop:Platform.OS==='ios'?vh(36):vh(24)}]} />
                        </TouchableOpacity>
                        <Text style={[styles.selectdatestext,{marginTop:Platform.OS==='ios'?vh(36):vh(24)}]}>Select Dates</Text>
                    </View>


                </View>
                <View style={{ flex: 7 }}>
                    <CalendarList
                        current={Date()}
                        minDate={Date()}
                        
                        onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                        
                        pastScrollRange={50}
                        
                        futureScrollRange={50}
                        
                        scrollEnabled={true}
                        
                        showScrollIndicator={true}
                        onDayPress={this.dayDecider}
                        markedDates={
                            arr


                        }
                        
                        markingType={'period'}



                    />
                </View>
                <View style={styles.lowerbox}>
                    <View style={styles.abc1}>
                        <View style={styles.checkin}>
                            <Text style={styles.text2}>Check-in</Text>
                            <Text style={styles.text3}>{a1} {startmonth3}</Text>

                        </View>
                        <Image source={right} style={{ height: vh(30), width: vw(30), marginTop: vh(10) }} />
                        <View style={styles.checkout}>
                            <Text style={styles.text2}>Check-out</Text>
                            <Text style={styles.text3}>{a2} {startmonth4}</Text>

                        </View>

                    </View>
                    <View style={[styles.abc2,{paddingTop:Platform.OS==='ios'?0:vh(10)}]}>
                        <View style={{ alignItems: 'center',}}>
                            <CustomButton
                                h={40}
                                w={330}
                                r={3}
                                title={"Apply Dates"}
                                color={'#007fac'}
                                textcolor={'white'}
                                size={15}
                                onpress={this.transit}
                            />
                        </View>

                    </View>


                </View>
            </View>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        obj1: state.DateReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        action2: (obj1) => dispatch(changedate(obj1)),

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Calend)


const styles = StyleSheet.create({
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
    lowerbox: {
        flex: 1.6,
        paddingTop: vh(3),
        backgroundColor: "white",
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,


    },
    abc1: {
        flex: 1.2,

        flexDirection: 'row',
        backgroundColor: "white",
        
    },
    abc2: {
        flex: 0.9,
        backgroundColor:'white',
        
       
        

    },
    checkin: {
        flex: 1,

    },
    checkout: {
        flex: 1.2,


    },
    text2: {
        marginLeft: vw(40),
        fontSize: normalize(17),
        fontWeight: 'bold',
        marginTop: vh(5),
        color: 'grey'
    },
    text3: {
        marginLeft: vw(40),
        fontSize: normalize(20),
        fontWeight: '400',
        marginTop: 5,
        



    }

})