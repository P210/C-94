import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Alert,Image } from 'react-native';

export default class PhoneNumber extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            number:""
        }
    }
    PhoneNumberDetails=()=>{
        db.collection('details').add({
            'name':this.state.name,
            'number': this.state.number
        })
        this.setState({
            name:'',
            number:""
        })
    }
    render(){
        return(
            <View>
                 <TouchableOpacity
             onPress={()=>{
                this.props.navigation.navigate('HomeScreen')
            }}>
            <Image
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 25,
                  marginLeft: 10,
                }}
                source={require('../assets/back--v1.png')}
              />
             
            </TouchableOpacity>
              <TextInput style={styles.InputBox}
                 placeholder='Name'
                maxLength={10}
                onChangeText={(text)=>{
                      this.setState({
                          name:text
                      })
                }}
                value={this.state.name}
               />
                <TextInput style={styles.InputBox}
                keyboardType='numeric'
                 placeholder='Number'
                maxLength={10}
                onChangeText={(text)=>{
                      this.setState({
                          number:text
                      })
                }}
                value={this.state.number}
               />
               <TouchableOpacity
               onPress={()=>{
                   this.PhoneNumberDetails()
                   this.props.navigation.navigate('WomanSafetyScreen')
               }}>
                   <Text>Add</Text>
               </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({

    inputBox:{
       borderWidth: 2,
          borderColor:'black',
          width: 200,
          height:40,
          marginVertical:10
    },
  
  })