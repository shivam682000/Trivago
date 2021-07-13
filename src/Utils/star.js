import star from '../assets/DetailIcon/star.png';
import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native'
import { vh, vw, normalize } from '../Dimension/Dimension'
export default class Star1 extends React.Component {
    
       render(){
           let x=this.props.y;
            if (x==1){
                return(
                    
                    <Image source={star} style={styles.star2}/>
                )

            }
             else if (x==2){
                return(
                    <View style={{flexDirection:'row'}}>
                    <Image source={star} style={styles.star2}/>
                    <Image source={star} style={styles.star2}/>
                    </View>
                )
            

            }
            else if (x==3){
                return(
                    <View style={{flexDirection:'row'}}>
                    <Image source={star} style={styles.star2}/>
                    <Image source={star} style={styles.star2}/>
                    <Image source={star} style={styles.star2}/>
                    </View>
                )
            

            }
            else if (x==4){
                return(
                    <View style={{flexDirection:'row'}}>
                    <Image source={star} style={styles.star2}/>
                    <Image source={star} style={styles.star2}/>
                    <Image source={star} style={styles.star2}/>
                    <Image source={star} style={styles.star2}/>
                    </View>
                )
            

            }
            else if (x==5){
                return(
                    <View style={{flexDirection:'row'}}>
                    <Image source={star} style={styles.star2}/>
                    <Image source={star} style={styles.star2}/>
                    <Image source={star} style={styles.star2}/>
                    <Image source={star} style={styles.star2}/>
                    <Image source={star} style={styles.star2}/>
                    </View>
                )
            

            }
            else{
                return(
                    
                        <View style={{flexDirection:'row'}}>
                        <Image source={star} style={styles.star2}/>
                        <Image source={star} style={styles.star2}/>
                        </View>
                    
                )
            }
       
        





}}
const styles = StyleSheet.create({
    star2: {
        height: vh(12),
        width: vw(12),
        marginLeft:vw(1)
    }
})
