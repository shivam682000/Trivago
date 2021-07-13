import * as React from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { vh } from '../Dimension/Dimension';
import Gradient1 from '../Component/Gradient'
export default class CustomButton extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(
            <TouchableOpacity  onPress={this.props.onpress}
             disabled={!this.props.overall} >
             <Gradient1
             height={this.props.height}
             width={this.props.width}
             radius={this.props.radius}
             mtp={this.props.mtp}
             name={this.props.name}
             opacity1={this.props.overall}
             />
            </TouchableOpacity>
        )
    }
}
