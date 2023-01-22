import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Button from './Button.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const foodImage = require('./assets/Images/bruschetta.png');
const Stack = createNativeStackNavigator();

 function HomeScreen({ navigation }) {
  const [text, onChangeText] = React.useState();
    return (
      <View>
        <Text style={styles.topSection}> Bruschetta Recipe </Text>
        <View style={styles.imageContainer}>
        <Image source={foodImage} style={styles.image} />
      </View>
      <View style={styles.center}>
      <TextInput style={styles.input}
        placeholder="Enter the Number of Servings"
        onChangeText={onChangeText}
      />
      </View>
      <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.Button}>
                <Button theme="primary" label="View Recipe" onPress={() => navigation.navigate('RecipeScreen', {number: text})} />
                </TouchableOpacity>
        </View>
      </View>
    );
}

function RecipeScreen({route}) {
  const { number } = route.params;
  return (
    <View>
    <Text style={styles.topSectionRecipe}> Bruschetta </Text>
    <View style={styles.ingredientSection}>
    <Text style={{fontSize: 32, paddingLeft: 36 }}> Ingredients </Text>
    <Text style={{fontSize: 24, paddingLeft: 60 }}>{(number * 4)} plum tomatoes</Text>
    <Text style={{fontSize: 24, paddingLeft: 60 }}>{(number * 6)} basil leaves</Text>
    <Text style={{fontSize: 24, paddingLeft: 60 }}>{(number * 3)} garlic gloves, chopped</Text>
    <Text style={{fontSize: 24, paddingLeft: 60 }}>{(number * 3)} TB olive oil</Text>
    <Text style={{fontSize: 32, paddingLeft: 36 }}> Directions </Text>
    <Text style={{fontSize: 24, paddingLeft: 60 }}> Combine the ingredients. Add salt to taste. Top French bread slices with mixture </Text>
    </View>

  </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Healthy Recipe" component={HomeScreen} options={{ headerStyle: { backgroundColor: '#f4511e', }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold', },}} />
        <Stack.Screen name="RecipeScreen" component={RecipeScreen} options={{ title: '', headerStyle: { backgroundColor: '#f4511e', }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold', },}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




const styles = StyleSheet.create({
  topSection: {
    flexGrow: 3,
    paddingTop: 40,
    fontSize: 36,
    textAlign: 'center',
  },
  topSectionRecipe: {
    flexGrow: 3,
    paddingTop: 75,
    fontSize: 44,
    textAlign: 'center',
  },
  ingredientSection: {
    flexGrow: 1,
    paddingTop: 10,
  },
  title: {
    backgroundColor: '#FF6347',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'left',
  },
  image: {
    width: 425,
    height: 325,
  },
  imageContainer: {
    paddingTop: 25,
    paddingBottom: 25,
  },
  input: {
    height: 60,
    width: 275,
    fontSize: 18,
    padding: 12,
    textAlign: 'center',
  },
  center: {
    textAlign: 'center',
    alignItems: 'center',
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems: 'center',
  },
});
