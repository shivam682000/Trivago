import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, FlatList, Image } from 'react-native';
import { vh, vw, normalize } from '../Dimension/Dimension';
import { connect } from 'react-redux'
import BookMark from '../Component/BookMark'
import Star1 from '../Utils/star'
import right from '../assets/DetailIcon/right.png';
import favourites1 from '../assets/TrivagoSymbol/favourites.jpg'
class Favourites extends React.Component {
    constructor(props) {
        super(props)
    }
    xyz1=(item,check)=>{
        let obj={...item}
   

}
transfer=(item)=>{
    this.props.navigation.navigate('afterDetail',item)
}
    _press1=()=>{
        this.props.navigation.navigate('HomePage')

    }
    _renderitem = ({ item }) => {
        let arr = [...item.prices]

        arr.sort((a, b) => {
            return (
                parseInt(a.price) - parseInt(b.price)
            )
        }

        )
        var min = arr[0]
        let price1 = parseInt(min.price) * 2
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.box} onPress={()=>this.transfer(item)}>
                    <View style={styles.imagebox}>
                        <Image source={{ uri: item.images[0] }} style={styles.image} />
                    </View>
                    <View style={styles.secondbox}>
                        <View style={styles.box2}>
                            <View style={styles.namebox}>
                                <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                            </View>

                            <View style={styles.bookmark}>
                                <BookMark xyz={(check)=>this.xyz1(item,check)}/>
                            </View>
                        </View>
                        <View style={{ marginLeft: vw(7), marginTop: vh(4) }}>
                            <Star1 y={item.star} />
                        </View>
                        <View style={styles.lowerbox}>
                            <View style={styles.box3}>
                                <Text style={styles.price}>
                                    ${min.price}
                                </Text>
                                <Text style={styles.site}>
                                    {min.site_name}
                                </Text>
                                <View style={{ flexDirection: 'row', marginLeft: vw(7), marginTop: vh(5) }}>
                                    <Text style={styles.text2}>
                                        2 nights for
                                </Text>
                                    <Text style={styles.text3}>
                                        ${price1}
                                    </Text>


                                </View>

                            </View>
                            <View style={styles.box4}>
                                <Text style={styles.text4}>View Deal</Text>
                                <Image source={right} style={styles.right} />
                            </View>

                        </View>
                    </View>








                </TouchableOpacity>
                <View style={styles.lowerbox1}>
                    <View style={styles.innerbox}>
                        <View style={styles.line}></View>
                        <View style={styles.pricebox}> 
                          <Text style={styles.sitestyling}>{min.site_name}</Text>
                          <Text style={styles.pricestyling}>${min.price}</Text>
                        </View>

                    </View>
                    <View style={styles.innerbox}>
                        <View style={styles.line}></View>
                        <View style={styles.pricebox}> 
                          <Text style={styles.sitestyling}>{arr[1].site_name}</Text>
                          <Text style={styles.pricestyling}>${arr[1].price}</Text>
                        </View>

                    </View>
                    <View style={styles.innerbox}>
                        <View style={styles.line}></View>
                        <View style={styles.pricebox}> 
                          <Text style={styles.sitestyling}>{arr[2].site_name}</Text>
                          <Text style={styles.pricestyling}>${arr[2].price}</Text>
                        </View>

                        
                        

                    </View>


                </View>
            </View>
        )
    }
    render() {
        console.log(this.props.obj2.list,)
        return (
            <View style={styles.container}>
                <Text style={styles.text1}>Your Bookmarks</Text>
                {this.props.obj2.list.length===0?
                (
                    <View style={styles.box5}>
                        <Image source={favourites1} style={{height:vh(160),width:vw(160),marginTop:vh(180)}}/>
                        <Text style={styles.text5}>Boomark it for later!</Text>
                        <Text style={{fontSize:normalize(15),marginTop:vh(15)}}>Tap on the Icon to save and compare your favourites</Text>
                        <Text style={{marginTop:vh(5)}}>here</Text>
                        <TouchableOpacity style={styles.button} onPress={this._press1}>
                            <Text style={{color:'white',fontWeight:'bold'}}>Go To Search</Text>

                        </TouchableOpacity>

                    </View>
                )
                :
                <FlatList
                    data={this.props.obj2.list}
                    renderItem={this._renderitem}
                    keyExtractor={(item) => item.hotelid}
                />
                }
                


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

export default connect(mapStateToProps, null)(Favourites);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    text1: {
        fontSize: normalize(30),
        fontWeight: 'bold',

        marginTop: vh(35),
        marginLeft: vw(15)
    },
    box: {
        height: vh(150),
        width: '90%',
        alignSelf: 'center',
        marginTop: vh(15),
        flexDirection: 'row',
        borderTopRightRadius: vh(15)
    },
    image: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: vh(15),
        borderBottomLeftRadius: vh(15),
        
    },
    imagebox: {
        height: vh(150),
        width: '25%',

    },
    sidebox: {
        flexDirection: 'row',
        flex: 1
    },
    name: {
        fontSize: normalize(17),
        fontWeight: '700',
        color: '#38454c',

    },
    bookmark: {
        marginLeft: vw(65),
        marginTop: vh(-7),

    },
    namebox: {
        height: vh(25),
        width: vw(180),

        marginLeft: vw(7),
        marginTop: vh(7)
    },
    secondbox: {
        height: vh(150),
        width: '75%',
        backgroundColor: 'white',
        borderTopRightRadius: vh(15),
        borderBottomRightRadius: vh(15)
    },
    box2: {
        height: vh(30),
        width: '100%',

        flexDirection: 'row'
    },
    lowerbox: {
        height: vh(80),
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: normalize(10),
        marginTop: vh(10),
        flexDirection: 'row'
    },
    box3: {
        flex: 1.6,

    },
    box4: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    price: {
        color: '#448306',
        fontSize: normalize(15),
        fontWeight: '700',
        marginLeft: vw(10),
        marginTop: vh(5)
    },
    site: {
        color: '#448306',
        fontSize: normalize(13),
        fontWeight: '500',
        marginLeft: vw(10),

    },
    text2: {
        fontWeight: '500',
        fontSize: normalize(12)
    },
    text3: {
        color: '#448306',
        fontSize: normalize(13),
        fontWeight: '500',
        marginLeft: vw(3),
    },
    text4: {
        fontSize: normalize(15),
        color: '#37464d',
        fontWeight: '700',
        marginLeft: vw(2),
        marginBottom: vh(13)
    },
    right: {
        height: vh(16),
        width: vw(16),
        marginBottom: vh(13)

    },
    lowerbox1: {
        height: vh(100),
        width: '83%',
        alignSelf: 'center',
        flex:1,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor:'white',
        borderBottomRightRadius:vh(15),
        borderBottomLeftRadius:vh(15)
    },
    innerbox:{
        flex:1
    },
    line:{
        height:vh(1.3),
        width:'90%',
        backgroundColor:'#ebecee',
        alignSelf:'center'
    },
    pricebox:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    sitestyling:{
        marginLeft:vw(10),
        marginTop:vh(6),
        fontSize:normalize(15),
        fontWeight:'500',
        color:'#37464d'
    },
    pricestyling:{
        marginRight:vw(10),
        marginTop:vh(6),
        fontSize:normalize(15),
        fontWeight:'500',
        color:'#37464d'
    },
    box5:{
        flex:1,
        
        alignItems:'center'
    },
    text5:{
        fontSize:normalize(20),
        fontWeight:'700',
        marginTop:vh(20)

    },
    button: {
        height: vh(30),
        width: vw(140),
        backgroundColor: '#007fac',
        borderRadius: vh(6),
        
        marginTop: vh(20),
        justifyContent: 'center',
        alignItems: 'center'
    },




}

)