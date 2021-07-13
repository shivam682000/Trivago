import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, FlatList, Modal,Platform } from 'react-native';
import { connect } from 'react-redux'
import { vh, vw, normalize } from '../Dimension/Dimension';
import Star1 from '../Utils/star'
import mark from '../assets/DetailIcon/previouslocation.png'
import BookMark from '../Component/BookMark'
import checkmark from '../assets/DetailIcon/checkmark.png'
import right from '../assets/DetailIcon/right.png';
import {addfavourites} from '../Action/Actions'
class DetailPage extends React.Component {
    constructor(props) {
        super(props)
    }
    xyz1=(item,check)=>{
            let obj={...item}
            this.props.action3(obj)
       

    }
    _onpress=(item)=>{
        console.log(item,'helloshivam')
        this.props.navigation.navigate('afterDetail',item)
    }
    _renderitem = ({ item }) => {
        var arr = [...item.prices];
        console.log('14000')
        arr.sort((a, b) =>
            parseInt(a.price) - parseInt(b.price)
        )
       
        var min = arr[0]
        let price1=min.price.slice(0,2)+min.price.slice(3,6)
        price1=parseInt(price1)*2
        price1=String(price1)
        price1=price1.slice(0,2)+','+price1.slice(2,5)
        
      
        
        return (
            <View style={styles.container1}>
                <TouchableOpacity style={[styles.box,{height:Platform.OS==='ios'?vh(315):vh(325)}]} onPress={()=>this._onpress(item)}>
                    <Image source={{ uri: item.images[0] }} style={styles.hotelimage} />
                    <View style={styles.box4}>
                        <View style={styles.ratingbox}>
                            <Text style={styles.rating1}>{item.rating}</Text>

                        </View>
                        <Text style={styles.ratingheading}>Excellent 196 Rating</Text>
                    </View>
                    <View style={styles.daysago}>
                        
                    </View>
                    <Text style={styles.text2}>Viewed 3 Days Ago</Text>
                    <BookMark xyz={(check)=>this.xyz1(item,check)}/>
                    <Text style={styles.titlename} numberOfLines={1}>{item.name}</Text>
                    <View style={styles.box2}>
                        <Star1 y={item.star} />
                        <Image source={mark} style={styles.mark} />
                        <Text style={styles.text1}>{item.distancefromcenter}</Text>

                    </View>
                    <View style={[styles.box3,{height:Platform.OS==='ios'?vh(88):vh(94)}]}>
                        <View style={styles.innerbox1}>
                            <Text style={styles.price}>${min.price}</Text>
                            <Text style={styles.site}>per night on {min.site_name}</Text>
                            <View style={{flexDirection:'row',marginTop:vh(3)}}>
                                <Text style={styles.nights}>2 nights for </Text>
                                <Text style={styles.color}>${price1}</Text>

                            </View>
                            <View style={{flexDirection:'row',marginTop:vh(1)}}>
                                <Image source={checkmark} style={styles.checkmark}/>
                                <Text style={styles.text3}>Free Cancellation</Text>

                            </View>
                        </View>
                        <View style={styles.innerbox2}>
                            <Text style={styles.text4}>View Deal</Text>
                            <Image source={right} style={styles.right}/>
                           

                        </View>

                    </View>


                </TouchableOpacity>
            </View>
        )


    }
    render() {
        let filter = this.props.obj2.overalldata.filter(item => {
            return (item.cityName.toLowerCase() == this.props.obj2.cityname.toLowerCase())
        })
        
        return (

            <View style={styles.container}>
                <FlatList
                    data={filter[0].hotels}
                    renderItem={this._renderitem}
                    keyExtractor={(item) => item.hotelid}
                />



            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        obj1: state.DateReducer,
        obj2: state.location
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       
        action3:(obj)=>dispatch(addfavourites(obj))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)
const styles = StyleSheet.create({
    box: {
        
        width: '100%',

        flex: 1,
        backgroundColor: "white",
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 10
    },
    container: {
        flex: 1,
        paddingTop: vh(25)
    },
    container1: {
        flex: 1,
        padding: vw(10)
    },
    hotelimage: {
        height: vh(160),
        width: '100%',

        borderTopRightRadius: normalize(10),
        borderTopLeftRadius: normalize(10)
    },
    titlename: {
        color: '#37454d',
        fontWeight: '700',
        fontSize: normalize(18),
        marginLeft: vw(10),
        marginTop: vh(10)

    },
    box2: {
        height: vh(25),
        width: '100%',
       
        flexDirection: 'row',
        paddingLeft: vw(10),
        alignItems: 'center'
    },
    mark: {
        height: vw(14),
        width: vw(14),
        marginLeft: vw(10)
    },
    text1: {
        color: '#38454c',
        fontWeight: '600',
        marginLeft: vw(5)
    },
    box3: {
        
        width: '95%',
        borderWidth:1,
        marginLeft: '2.5%',
        borderRadius: normalize(7),
        borderColor: '#9ca1a4',
        flexDirection: 'row'
    },
    innerbox1: {
        flex: 1.6
    },
    innerbox2: {
        flex: 1.2,
        
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    ratingbox: {
        height: normalize(20),
        width: normalize(40),
        backgroundColor: '#316300',
        borderRadius: normalize(8),
        justifyContent: 'center',
        alignItems: 'center',
        bottom:vh(0)


    },
    box4: {
        height: normalize(25),
        width: normalize(200),

        position: 'absolute',
        top: vh(130),
        marginLeft: vw(15),
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'

    },
    rating1: {
        color: 'white',
        fontWeight: '600'
    },
    ratingheading: {
        color: 'white',
        fontWeight: '600',
        fontSize: normalize(16),
        marginLeft: vw(10),
        bottom:vh(0)

    },
    daysago: {
        height: vh(27),
        width: vw(140),
        backgroundColor: '#313b43',
        position: 'absolute',
        top: vh(10),
        left: vw(15),
        borderRadius: normalize(12),
        opacity: 0.5,
        padding:vw(10)
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    text2: {
        color: 'white',
        fontWeight: 'bold',
        position:'absolute',
        top:vh(16),
        left:vw(23),
        fontSize:normalize(13)
    },
    price:{
        color:'#428501',
        fontWeight:'700',
        fontSize:normalize(18),
        marginLeft:vw(14),
        marginTop:vh(6)
    },
    site:{
        marginLeft:vw(14),
        fontSize:normalize(13)
    },
    nights:{
     marginLeft:vw(14),
     fontSize:normalize(12),
     color:'grey'
    },
    color:{
        color:'#428501',
        fontWeight:'500',
        fontSize:normalize(13)
    },
    checkmark:{
        height:vh(16),
        width:vw(16),
        marginLeft:vw(14),
  
    },
    text3:{
        color:'#428501',
        marginLeft:vw(5),
        fontWeight:'500',
        fontSize:normalize(13)
    },
    text4:{
        fontSize:normalize(17),
        color:'#37464d',
        fontWeight:'700'
    },
    right:{
        height:vh(20),
        width:vw(20),
        marginLeft:vw(5)
    }



})