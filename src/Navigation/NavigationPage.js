import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabBar from '../Navigation/BottomTabBarNavigation'
import SearchEngine from '../Component/SearchEngine'
import Calend from '../Screens/Calendar'
import DetailPage from '../Screens/DetailPage'
import afterDetail from '../Screens/afterDetail'
import Splash from '../Screens/Splash'
import SignIn from '../Screens/SignIn'
import ForgotPassword from '../Screens/ForgotPassword'
import SignUp from '../Screens/SignUp'
import Otp from '../Screens/Otp'
import ResetPassword from '../Screens/ResetPassword'
class NavigationPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const Stack = createStackNavigator();
        return (

            <NavigationContainer >
                <Stack.Navigator headerMode={'none'} initialRouteName={'Splash'}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Otp" component={Otp} />
                    <Stack.Screen name="ResetPassword" component={ResetPassword} />
                    <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
                    <Stack.Screen name="SearchEngine" component={SearchEngine} />
                    <Stack.Screen name="Calend" component={Calend} />
                    <Stack.Screen name="afterDetail" component={afterDetail} />

                </Stack.Navigator>
            </NavigationContainer>

        )
    }
}
export default NavigationPage;