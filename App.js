import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductDetail from './src/components/ProductDetails';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ChooseColorProduct from './src/components/ChooseColorProduct';
const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
         <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="ProductDetail"
         >
          <Stack.Screen name="ProductDetail" component={ProductDetail} /> 
          <Stack.Screen name="ChooseColorProduct" component={ChooseColorProduct}/>
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}