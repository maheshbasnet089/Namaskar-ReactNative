
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Register from './src/screens/auth/Register';
import Login from './src/screens/auth/Login';
import { RootStackNavigatorParamsList } from './src/types/global';



const {Navigator,Screen} = createNativeStackNavigator<RootStackNavigatorParamsList>() 


function App() {


  return (
    <NavigationContainer >
      <Navigator  screenOptions={{headerShown:false}}>
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Register' component={Register} />
        <Screen name='Login' component={Login} />
      </Navigator>
    </NavigationContainer>
  );
}


export default App;
