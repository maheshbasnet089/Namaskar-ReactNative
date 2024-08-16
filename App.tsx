
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Register from './src/screens/auth/Register';
import Login from './src/screens/auth/Login';
import { RootStackNavigatorParamsList } from './src/types/global';
import { Provider } from 'react-redux';
import store from './src/store/store';



const {Navigator,Screen} = createNativeStackNavigator<RootStackNavigatorParamsList>() 


function App() {


  return (
    <Provider store={store}>
    <NavigationContainer >
      <Navigator  screenOptions={{headerShown:false}}>
        <Screen name='Register' component={Register} />
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Login' component={Login} />
      </Navigator>
    </NavigationContainer>
    </Provider>
  );
}


export default App;
