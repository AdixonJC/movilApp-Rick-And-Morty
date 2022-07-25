import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/screens/Home/HomeScreen';
import CharacterScreen from './src/components/screens/Characters/CharactersScreen';
import LocationScreen from './src/components/screens/Location/LocationScreen';
import EpisodesScreen from './src/components/screens/Episodes/EpisodesScreen';
//redux
import { Provider } from 'react-redux';
import store from './src/store'

const stackRickAndMorty = createNativeStackNavigator()


const App = () => {



  return (
    <Provider store={store}>
    <NavigationContainer>
      <stackRickAndMorty.Navigator initialRouteName='Home'>
          <stackRickAndMorty.Screen
           name='Home'
           component={HomeScreen}
           options={{title : "Welcome"}}/>
           <stackRickAndMorty.Screen
            name='Characters'
            component={CharacterScreen}
            />
            <stackRickAndMorty.Screen
             name='Locations'
             component={LocationScreen}/>
            <stackRickAndMorty.Screen
             name='Episodes'
             component={EpisodesScreen}/>
      </stackRickAndMorty.Navigator>
    </NavigationContainer>
    </Provider>
  );
};



export default App;
