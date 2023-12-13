import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './src/Auth';
import CreateUser from './src/CreateUser';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} options={{title: 'Service Orders API' }}/>
        <Stack.Screen name="CreateUser" component={CreateUser} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}