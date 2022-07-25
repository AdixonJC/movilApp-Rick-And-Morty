import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from "./styles"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.centerText}>
      <Text style={styles.fontStyle}>Rick And Morty App</Text>
      <Button
       title='Go to Characters'
       onPress={ () => navigation.navigate('Characters')}/>
       <Button 
        title='Go to Locations' 
        onPress={() => navigation.navigate('Locations')}/>
       <Button
        title='Go to Episodes'
        onPress={() => navigation.navigate('Episodes')}/>
     </View>
  );
}

export default HomeScreen
