import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { vh, vw, normalize } from '../Dimension/Dimension';
import { Dimensions, PixelRatio } from 'react-native';
export const screenWidth = Dimensions.get('window').width;
import left from '../assets/afterDetailimage/left.png';
import BookMark2 from '../Component/BookMark2'
import share from '../assets/afterDetailimage/share.png'
import Star1 from '../Utils/star'
import right from '../assets/afterDetailimage/more.png'
import right1 from '../assets/DetailIcon/right.png';
import ReviewModal from '../Component/reviews'
import Amenities1 from '../Component/Amenities'
import Description from '../Component/Description'
class afterDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeIndex: 0 ,visible:false}

    }
    _onpress=()=>{
        this.props.navigation.goBack()
    }
    press=()=>{
        this.setState({visible:true})
    }
    _renderItem({ item, index }) {
        console.log(item, 'what are u doing')

        return (


            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Image
                    source={{ uri: item }}
                    style={{ height: vh(250), width: '100%' }}
                />
            </View>

        );
    }

    render() {

        let { images, name, star, prices,rating,ratingreview,Amenities,Description1,checkin,checkout} = this.props.route.params;
        console.log(this.props.route.params, 'helo')
        let arr = [...prices]
        console.log(parseInt('14,700'))
        arr.sort((a, b) => {
            return (
                parseInt(a.price) - parseInt(b.price)
            )
        }

        )
        var min = arr[0]
        var remaining = arr.slice(1, 5);





        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.Carouselview}>
                        <Carousel
                            layout={"default"}
                            ref={ref => this.carousel = ref}
                            data={images}
                            sliderWidth={screenWidth}
                            itemWidth={screenWidth}
                            renderItem={this._renderItem}
                            onSnapToItem={index => this.setState({ activeIndex: index })}
                            autoplay={true}
                            autoplayInterval={3000}
                        />

                    </View>
                    <Pagination

                        dotsLength={5}
                        activeDotIndex={this.state.activeIndex}
                        containerStyle={{ paddingVertical: vh(0), position: 'absolute', marginTop: vh(240), left: vw(130) }}
                        dotStyle={{
                            width: normalize(10),
                            height: normalize(10),
                            borderRadius: 5,
                            marginHorizontal: -5,
                            backgroundColor: '#ffffff'
                        }}
                        inactiveDotStyle={{
                            backgroundColor: 'rgba(232,232,232,255)',
                            width: normalize(10),
                            height: normalize(10),

                        }}

                        inactiveDotOpacity={0.9}
                        inactiveDotScale={0.7}
                    />
                    <TouchableOpacity style={styles.left} onPress={this._onpress}>
                        <Image source={left} style={styles.left} />
                    </TouchableOpacity>

                    <BookMark2 />
                    <TouchableOpacity style={styles.share} >
                        <Image source={share} style={styles.share} />
                    </TouchableOpacity>

                    <Text style={styles.heading}>{name}</Text>
                    <View style={{ marginLeft: vw(20), marginTop: vh(7) }}>
                        <Star1 y={star} />
                    </View>
                    <Text style={styles.text1}>OUR RECOMMENDED DEAL</Text>
                    <View style={styles.box1}>
                        <View style={styles.innerbox1}>
                            <Text style={styles.site_name}>{min.site_name}</Text>
                            <View style={{ flexDirection: 'row', marginTop: vh(8), }}>
                                <Text style={styles.bullet}>{'\u2B24'}</Text>
                                <Text style={styles.text2}>Free Cancellation</Text>


                            </View>
                            <View style={{ flexDirection: 'row', marginTop: vh(5), }}>
                                <Text style={styles.bullet}>{'\u2B24'}</Text>
                                <Text style={styles.text2} >Pay At property</Text>


                            </View>

                        </View>
                        <View style={styles.innerbox2}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.text3}>${min.price}</Text>
                                <Image source={right} style={styles.right} />

                            </View>
                            <Text style={styles.text4}>Per Night</Text>

                        </View>


                    </View>
                    <Text style={styles.text1}>MORE DEAL</Text>
                    {
                        remaining.map(item => {
                            return (
                                <View style={[styles.box1, { borderWidth: 0, borderColor: 'white', shadowRadius: 3 }]}>
                                    <View style={styles.innerbox1}>
                                        <Text style={styles.site_name}>{item.site_name}</Text>
                                        <View style={{ flexDirection: 'row', marginTop: vh(8), }}>
                                            <Text style={styles.bullet}>{'\u2B24'}</Text>
                                            <Text style={styles.text2}>Free Cancellation</Text>


                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: vh(5), }}>
                                            <Text style={styles.bullet}>{'\u2B24'}</Text>
                                            <Text style={styles.text2} >Pay At property</Text>


                                        </View>

                                    </View>
                                    <View style={styles.innerbox2}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={styles.text3}>${item.price}</Text>
                                            <Image source={right} style={styles.right} />

                                        </View>
                                        <Text style={styles.text4}>Per Night</Text>

                                    </View>


                                </View>
                            )
                        })
                    }
                  <View style={styles.line}></View>
                  <Text style={styles.head}>GUEST'S FEEDBACK</Text>
                  <Text style={styles.head1}>Rating</Text>
                  <View style={styles.ratingBox}>
                      <View style={styles.box2}>
                          <Text style={styles.text7}>{rating}</Text>
                          

                      </View>
                      <Text style={styles.text8}>FAIR</Text>

                  </View>
                  <Text style={styles.head1}>Reviews</Text>
                  <Text style={styles.head3}>{ratingreview}</Text>
                  
                  <View style={styles.line}></View>
                  <Text style={styles.head1}>AMENTIES</Text>
                  <Amenities1 data={Amenities}/>
                  
                  <View style={styles.line}></View>
                  <Text style={styles.head1}>HOTEL DESCRIPTION</Text>
                  <Description data={Description1}/>
                  
                  <View style={styles.line}></View>
                  <View style={styles.time}>
                      <View style={{flexDirection:'row',justifyContent:'space-around',}}>
                          <Text style={styles.text9}>Check-In</Text>
                          <Text style={styles.text9}>Check-Out</Text>
                      </View>
                      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                          <Text style={styles.tx1}>{checkin}</Text>
                          <Text style={styles.tx1}>{checkout}</Text>
                      </View>
                  </View>
                  <View style={styles.line}></View>

                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.first}>
                        <Text style={[styles.text3, { marginLeft: vw(20), marginTop: vh(5), fontSize: normalize(18) }]}>${min.price}</Text>
                        <Text style={styles.text5}>per night on {min.site_name}</Text>

                    </View>
                    <View style={styles.second}>
                        <Text style={styles.text6}>View Deal</Text>
                        <Image source={right1} style={styles.right1} />

                    </View>

                </View>
                <ReviewModal visible={this.state.visible}/>
            </View>
        )
    }
}

export default afterDetail;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Carouselview: {
        height: normalize(250),
        width: '100%',

        marginTop: vh(28)
    },
    left: {

        height: normalize(35),
        width: normalize(35),
        position: 'absolute',
        top: vh(21),
        left: vw(5)
    },
    share: {
        height: normalize(30),
        width: normalize(30),
        position: 'absolute',
        top: vh(23),
        right: vw(35)
    },
    heading: {
        color: '#37454d',
        fontWeight: '800',
        fontSize: normalize(22),
        marginTop: vh(20),
        marginLeft: vw(20)

    },
    text1: {
        fontWeight: '600',
        fontSize: normalize(15),
        marginTop: vh(28),
        marginLeft: vw(20)
    },
    box1: {
        height: vh(96),
        width: '90%',
        borderColor: '#759f4b',
        borderWidth: normalize(1.5),
        backgroundColor: '#f5f7f2',
        marginLeft: vw(20),
        marginTop: vh(15),
        borderRadius: vh(10),
        flex: 1,
        flexDirection: 'row',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5,
    },
    innerbox2: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center',
        paddingLeft: vw(15),
        paddingTop: vh(20)
    },
    innerbox1: {
        flex: 2.1,

    },
    bullet: {
        fontSize: 5,
        color: '#428501',
        marginLeft: vw(15),
        marginTop: vh(5)
    },
    site_name: {
        fontWeight: '800',
        fontSize: normalize(18),
        marginLeft: vw(15),
        color: '#38464c',
        marginTop: vh(8),

    },
    text2: {
        marginLeft: vw(5),
        color: '#458209',
        fontWeight: '600',
        fontSize: normalize(15)
    },
    text3: {
        color: '#448306',
        fontSize: normalize(20),
        fontWeight: '700'
    },
    right: {
        height: vh(15),
        width: vw(15),
        tintColor: '#448306',
        fontWeight: 'bold',
        marginTop: vh(15),
        marginLeft: vw(5)
    },
    text4: {
        color: '#468010',
        fontWeight: '500',
        fontSize: normalize(15)
    },
    footer: {
        height: vh(70),
        width: '100%',

        flexDirection: 'row',
        shadowColor: 'grey',
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5
    },
    first: {
        flex: 2,
        

    },
    second: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:vh(10)
    },
    text5: {
        marginLeft: vw(20),
        fontSize: normalize(14),
        fontWeight: '400'
    },
    text6:{
        fontSize:normalize(20),
        color:'#37464d',
        fontWeight:'700'
    },
    right1:{
        height:vh(22),
        width:vw(22),
        marginLeft:vw(5)
    },
    line:{
        height:vh(2),
        width:'90%',
        backgroundColor:'#d8dadb',
        
        marginTop:vh(20),
        marginLeft:vw(12)
    },
    head:{
        color:'#37464c',
        fontSize:normalize(18),
        fontWeight:'500',
        marginLeft:vw(15),
        marginTop:vh(15)
    },
    head1:{
        color:'#6d7277',
        fontSize:normalize(18),
        fontWeight:'500',
        marginLeft:vw(15),
        marginTop:vh(15)
    },
    ratingBox:{
        height:60,
        width:'100%',
        
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:vw(15),
        marginTop:vh(15)
    },
    box2:
    {
        height:vh(55),
        width:vw(55),
        backgroundColor:'#f48f00',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:normalize(5),
       
    },
    text7:{
        color:'white',
        fontSize:17,
        fontWeight:'600'
    },
    text8:{
        color:'#37454c',
        fontSize:20,
        fontWeight:'600',
        marginLeft:vw(10)
    },
    head3:{
        color:'#6d7277',
        fontSize:normalize(15),
        fontWeight:'400',
        marginLeft:vw(15),
        marginTop:vh(15),
        marginRight:vw(17)
    },
    seemore:{
        color:'#067ca7',
        alignSelf:'flex-end',
        fontWeight:'600',
        fontSize:normalize(17),
        marginTop:vh(15),
        marginRight:vw(18)
        
    },
    time:
    {
      
       height:vh(40),
       width:'100%',
      
    marginTop:vh(10)
},
    text9:{
        fontSize:normalize(18),
        fontWeight:'600',
        color:'#37464d'
    },
    tx1:{
        fontSize:normalize(16),
        fontWeight:'500',
        color:'grey',
        marginTop:vh(7)
    }


})