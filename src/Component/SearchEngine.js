import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Modal, Image,FlatList ,Platform} from 'react-native';
import { vh, vw, normalize } from '../Dimension/Dimension'
import left from '../assets/Calendar/left.png'
import CustomTextInput from '../Component/CustomTextInput'
import location from '../assets/SearchBar/location.png';
import {connect} from 'react-redux'
import {searchhistory,changesearchvisible,cityselected} from '../Action/Actions'
import marker from '../assets/SearchBar/marker.png'
import {CalendarList1} from '../Component/Calendar'
class SearchEngine extends React.Component {
    constructor(props) {
        super(props)
        this.state={view1:true,placename:''}
        this.newref=React.createRef();
    }
    componentDidMount(){
        console.log('shivam')
      //this.newref.current.focus();
      this.props.navigation.setOptions({
          tabBarVisible:false
      })
    }
   _onchange=(text1)=>{
       this.setState({placename:text1})
       if (text1.length==0){
           this.setState({view1:true})
       }
       else{
        this.setState({view1:false})
       }
   }
   onpress2=(name)=>{
       this.props.navigation.navigate('Calend',{Name:name})
       this.props.action2(name)

   }
   _renderitem=({item})=>{
       return(
       <TouchableOpacity style={styles.city} onPress={()=>{this.onpress2(item.Name)}}>
           <Image source={marker} style={styles.marker}/>
           <View style={styles.name}>
               <Text style={styles.cityname}>{item.Name}</Text>
               <Text style={styles.countryname} >{item.city}</Text>
           </View>


       </TouchableOpacity>
       )
      
   }
   press1=()=>{
    this.props.navigation.navigate('HomePage')
   }
   _renderitem2=({item})=>{
       return(
        <TouchableOpacity style={styles.city} onPress={()=>{this.onpress2(item.Name)}}>
        <Image source={marker} style={styles.marker}/>
        <View style={styles.name}>
            <Text style={styles.cityname}>{item.Name}</Text>
            <Text style={styles.countryname} >{item.city}</Text>
        </View>


    </TouchableOpacity>
       )


   }
    render() {
        let filteredlist=this.props.historylist.citylist1.filter(item=>{
            return(item.Name.startsWith(this.state.placename)==true)
        })
        console.log()
        
        return (
            
                <View style={styles.container}>
                    <View style={[styles.header,{height:Platform.OS==='ios'?vh(58):vh(43)}]}>
                        <TouchableOpacity onPress={this.press1}>

                            <Image source={left} style={[styles.leftImage,{marginTop:Platform.OS==='ios'?vh(16):vh(6)}]} />
                        </TouchableOpacity>
                        <View style={{marginTop:Platform.OS==='ios'?vh(16):vh(6),flex:1}}>

                        <CustomTextInput
                            h={32}
                            r={20}
                            pl={15}
                            ml={10}
                            title={'Enter Destination'}
                            w={'93%'}
                            onChange={this._onchange}
                            val={this.state.placename}
                            ref={this.newref}
                            focus={true}
                        />
                       </View>
                    </View>
                    <View style={styles.bottomline}></View>
                    {
                        this.state.view1 ? 
                        (
                            <View style={{flex:1,marginTop:vh(25)}}>
                                <TouchableOpacity style={styles.location}>
                                    <Image source={location} style={styles.locationimage}/>
                                    <Text style={styles.currentlocationtext}>Current location</Text>

                                </TouchableOpacity>
                                <Text style={styles.text1}>POPULAR DESTINATION</Text>
                                <FlatList
                                data={this.props.historylist.populardestinationlist}
                                renderItem={this._renderitem}
                                />



                                

                            </View>
                        ):
                        (
                            <View>
                                <FlatList
                                data={filteredlist}
                                renderItem={this._renderitem2}
                                keyExtractor={(item,index)=>index}
                                />

                            </View>
                        )
                    }

                </View>

            //   <CalendarList1
            // //   visible={this.props.obj1.visible}
            // //   onpress={this.back}
            //   />
           
        )
    }
}

const mapStateToProps=(state)=>{
    return{
     historylist:state.location
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        action1:()=>dispatch(changesearchvisible()),
        action2:(name)=>dispatch(cityselected(name))
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(SearchEngine)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: vh(20),
        
    },
    header:{
        
        width:'100%',
        flexDirection:'row'
        
    },
    leftImage: {
        height: vh(28),
        width: vw(28),
        marginTop: vh(15),
        marginLeft: vw(12),
       
        

    },
    bottomline:{
        height:vh(0.5),
        width:'100%',
        
        backgroundColor:'white',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height:3 },
        shadowOpacity: 0.3,
        shadowRadius: 0.5,
        elevation: 5,

    },
    location:{
        flexDirection:'row',

    },
    locationimage:{
        height:vh(25),
        width:vw(25),
        marginLeft:vw(17),
    },
    currentlocationtext:{
        fontSize:normalize(16),
        fontWeight:'400',
        marginLeft:vw(17),
        color:'#37464e',
        marginTop:vh(3)
    },
    city:{
        
        height:vh(50),
        width:'100%',
        marginTop:vh(10),
        flexDirection:'row',
      

    },
    text1:{
        fontSize:normalize(13),
        fontWeight:'500',
        marginTop:50,
        marginLeft:vw(17)
    },
    marker:{
        height:vh(25),
        width:vw(25),
        marginLeft:vw(10),
        marginTop:vh(15)
        
    },
    name:{
        
        flex:1,
        marginLeft:15
    },
    cityname:{
        fontWeight:'400',
        fontSize:normalize(16),
        marginTop:vh(5)
    },
    countryname:{
        fontWeight:'400',
        fontSize:normalize(12),
        marginTop:vh(5),
        color:'grey'
    }
})