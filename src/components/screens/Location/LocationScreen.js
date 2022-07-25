import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

  const LocationScreen = ({navigate}) => {
  return (
    <View style={styles.centerText}>
      <Text style={styles.fontSizeText}> All Location Rick and Morty</Text>
     </View>
  );
}


export default LocationScreen
