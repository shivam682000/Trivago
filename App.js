// import * as React from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
//import NavigationPage from './src/Navigation/NavigationPage'
// class App extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//           <NavigationPage/>

//         )
//     }
// }
// export default App;
import * as React from 'react';
import { View, Text } from 'react-native';
import NavigationPage from './src/Navigation/NavigationPage'


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/Store/Store'
class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationPage />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;