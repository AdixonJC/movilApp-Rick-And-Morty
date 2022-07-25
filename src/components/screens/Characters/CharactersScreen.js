import React, { useEffect } from 'react';
import { View, Text, Button, ScrollView, Image } from 'react-native';
import styles from './styles';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { useDispatch, useSelector } from 'react-redux';
import getCharacters from '../../../utils/apis/getCharacters';
import { setCharacters } from '../../../store/slices/characterSlices';

const CharacterScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const {characters} = useSelector(({characters}) => characters)

  const getAllCharacters = () => {
    getCharacters()
    .then(response => {
         dispatch(setCharacters(response));
      })
    .catch(err => console.log(err))
  }
  
  useEffect(() => {
   getAllCharacters()
  }, [])

  console.log(characters);

  return (
    <ScrollView>
    <View style={styles.contentCenter}>
      <Text style={styles.fontStyle}>All Characters Rick and Morty </Text>
      <Button
       title='Go to Characters... again'
       onPress={() => navigation.push("Characters") }/>
      <Button title='Go back to first screen in stack'
       onPress={() => navigation.popToTop()}/>
       {characters.length !== 0 && characters.results.map(character => {
         return <View key={character.name}>
                <Text style={styles.fontStyle}>
                  {character.name}
                </Text>
                  <Image
                   style={styles.dimension}
                   source={{
                    uri: character.image,
                    cache: 'reload'
                   }}/>
                </View>
       })}
     </View>
    </ScrollView>
  );
}

export default CharacterScreen
