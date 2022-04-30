import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from './screens/Home';
import Details from './screens/Details';

// to get our stack, we need to create a variable
const Stack = createStackNavigator();

//declare a theme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

//create screens folder and new screens "Home.js" and "Details.js" -> each component
// is a basic error function component

const App = () => {
  //declare fonts, assets
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if(!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>

        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>first REACT NATIVE APP sd sdsd </Text>
    // </View>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
