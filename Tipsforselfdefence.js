import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Alert,Image } from 'react-native';

export default class LawsWoman extends React.Component{
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
                <Image
                style={{
                  width: 55,
                  height: 55,
                  marginTop: 25,
                  marginLeft: 100,
                }}
                source={require('../assets/Pepper.jpg')}
              />
                <Text style={styles.text}>
                                             Woman Safety Tips
                1. Carry a pepper spray with you, always and keep it handy. Don’t tuck it too low in your bag.  
                2. Hold your bag as tightly as you can when you are taking public transport. You can use it to hit your predator.
                3. When you are walking on a road, keep your mobile phone handy but avoid using it. Being on the phone makes you 
                less alert.  
                4. When you are travelling in an auto alone, make sure you share the auto number with someone in your family even
                 if it’s during the day.
                5. Similarly, if you have booked a cab, always share your coordinates with someone. 
                6. When in office, avoid going to isolated areas with no CCTV cameras.
                7. If you have parked your car, always look underneath, especially at night or at a less-crowded area.
                8. Whenever you are posting anything on social media, make sure you don’t do it in real-time. Because 
                if you do, you’re telling people on your social media about your whereabouts. Delay those posts by say, 20-30 minutes.
                9. Always ensure you aren’t posting anything on your social media with your address or phone number on it. 
                10. Whenever you are giving out order for delivery at a grocery store, make sure you whisper your address or write 
                it down somewhere and give it to the shopkeeper. Never announce it.
                11. Whenever you are getting your phone recharged, if it’s at a store, don’t loudly speak up your phone number. 
                12. Always pour your own drinks at parties and don’t ever take drinks from complete strangers or even friends. 
                If you’ve left your drink unattended for even a few minutes, leave it and get a fresh drink. It may have been spiked 
                when you weren’t looking.
                13. If you feel someone is stalking you, try to find a crowded place and call someone for help.
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