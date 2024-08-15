
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

const {Screen,Navigator} = createNativeStackNavigator() 


function App() {


  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}


export default App;
