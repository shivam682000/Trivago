import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput,Modal } from 'react-native';

class ReviewModal extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Modal
                animationType="slide"
                style={{ flex: 1 }}
                visible={this.props.visible}

            >

            </Modal>
        )
    }
}
export default ReviewModal;
const styles=StyleSheet.create({
    
})