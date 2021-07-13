import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import HomePage from '../Screens/HomePage'
import SearchEngine from '../Component/SearchEngine'
import Calend from '../Screens/Calendar'
import DetailPage from '../Screens/DetailPage'
import SearchingGif from '../Screens/SearchingGif'
class Stack extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigation, route } = this.props;
        const Stack = createStackNavigator();
        console.log(this.props, 'xyz')

        return (
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="DetailPage" component={DetailPage} />
                <Stack.Screen name="SearchingGif" component={SearchingGif} />
            </Stack.Navigator>
    )
    }
}
export default Stack;
const styles = StyleSheet.create({

})