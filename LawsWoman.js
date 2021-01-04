import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Alert,Image } from 'react-native';

export default class LawsWoman extends React.Component{
    render(){
        return(
            <View>
                <Image
                style={{
                  width: 55,
                  height: 55,
                  marginTop: 25,
                  marginLeft: 100,
                }}
                source={require('../assets/Laws.jpg')}
              />
                <Text style={styles.text}>
                                                      Laws for Women 
                                             The Prohibition of Child Marriage Act, 2006
                                             Special Marriage Act, 1954
                                             Dowry Prohibition Act, 1961
                                             Indian Divorce Act, 1969
                                             Maternity Benefit Act,1861
                                             National Commission for Women Act, 1990

                          Read more at: https://yourstory.com/2016/06/laws-that-protect-women-rights
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
   text:{
    color :'black',
    fontSize: 18,
   
    }
   

})