import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image ,Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomePage'
import Setting from '../Screens/Setting'
import Weekend from '../Screens/Weekend'
import Favourites from '../Screens/Favourites'
import { vh, vw, normalize } from '../Dimension/Dimension'
import Stack from '../Utils/stack';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

class BottomTabBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const Tab = createBottomTabNavigator();
        
        
       console.log( this.props.navigation.state)
        return (
            <Tab.Navigator  tabBarOptions={{labelStyle: styles.LabelText,activeTintColor:'#027eaa',style:{height:Platform.OS==='ios'?vh(70):vh(57),paddingVertical:vh(10)}}} >
                <Tab.Screen name="Search" component={Stack} 
                    options={{ 
                     
                     tabBarLabel: 'Search',
                            tabBarIcon: ({ focused,color}) => focused ? (
                                <Image source={require('../assets/IconBottomBar/searchb.png')} style={[styles.IconSize,{tintColor:'#027eaa'}]} />
                            ) : (
                                <Image source={require('../assets/IconBottomBar/search.png')} style={styles.IconSize} />
                            )

                        }

                    } />
                <Tab.Screen name="Weekend" component={Weekend}
                    options={
                        {
                            tabBarLabel: 'Weekend',
                            tabBarIcon: ({ focused }) => focused ? (
                                <Image source={require('../assets/IconBottomBar/markerb.png')} style={[styles.IconSize,{tintColor:'#027eaa'}]} />
                            ) : (
                                <Image source={require('../assets/IconBottomBar/marker.png')} style={styles.IconSize} />
                            )

                        }


                   }
                />
                <Tab.Screen name="Favourites" component={Favourites}
                    options={
                        {   tabBarBadgeStyle:{backgroundColor:'red'},
                            tabBarLabel: 'Favourites',
                            tabBarIcon: ({ focused,color }) => focused ? (
                                <Image source={require('../assets/IconBottomBar/heartsb.png')} style={[styles.IconSize,{tintColor:'#027eaa'}]} />
                            ) : (
                                <Image source={require('../assets/IconBottomBar/hearts.png')} style={styles.IconSize} />
                            )

                        }


                    }
                />
                <Tab.Screen name="Setting" component={Setting}
                    options={
                        {
                            tabBarLabel: 'Settings',
                            tabBarIcon: ({ focused }) => focused ? (
                                <Image source={require('../assets/IconBottomBar/settingsb.png')} style={[styles.IconSize,{tintColor:'#027eaa'}]} />
                            ) : (
                                <Image source={require('../assets/IconBottomBar/settings.png')} style={styles.IconSize} />
                            )

                        }


                    }
                />
            </Tab.Navigator>
        )
    }
}
export default BottomTabBar;
const styles = StyleSheet.create({
    IconSize: {
        height: vh(22),
        width: vw(22),
        resizeMode:'contain',
        
        
    },
    LabelText: {
        fontSize: normalize(12),
        marginLeft: 5,
        marginTop:vh(7),
        

    }

})