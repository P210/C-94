import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Alert,Image } from 'react-native';
import * as SMS from 'expo-sms';
import firebase from 'firebase';
import db from '../config'

export default class WomanSafetyScreen extends React.Component{
   message=()=>{
    const { result } = await SMS.sendSMSAsync(
        ['8828401957','8800305577'],
        'Its an emergency help me ',
        {
        
        }
      );
   }
 render(){
     return(
         <View style={styles.Container}>
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
            <TouchableOpacity style={styles.button}
            onPress={()=>{
                this.props.navigation.navigate('VideoforselfDefence')
            }}>
            <Image
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 25,
                  marginLeft: 50,
                }}
                source={require('../assets/self-defence.png')}
              />
              <Text>Videos for self-defence</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
             onPress={()=>{
                this.props.navigation.navigate('LawsWoman')
            }}>
            <Image
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 25,
                  marginLeft: 60,
                }}
                source={require('../assets/lawsImage.jpg')}
              />
              <Text>Laws for women safety</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.button}
             onPress={()=>{
                this.props.navigation.navigate('Tipsforselfdefence')
            }}>
            <Image
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 25,
                  marginLeft: 70,
                }}
                source={require('../assets/tipsImage.png')}
              />
              <Text>Tips for woman safe defense</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}
            onPress={()=>{
                this.message()
                return Alert.alert('Message sent')
            }}>
                <Text>SOS Emergency Alert</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                this.props.navigation.navigate('phoneNumber')
            }}>
                <Text>Add phone numbers</Text>
            </TouchableOpacity>
         </View>
     )
 }
}
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
    height:50,
    width:50
    },
    button2:{
        marginTop: 40,
        marginLeft: 50,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 50,
    }
})