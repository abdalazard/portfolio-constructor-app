import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import Auth from './src/Auth';
import CreateUser from './src/CreateUser';
import Home from './src/Screens/Home';

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initialRoute, setInitialRoute] = useState('Auth');

  useEffect(() => {
    if (isAuthenticated) {
      setInitialRoute('Home');
    }
  }, [isAuthenticated]);

  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName={initialRoute}>
      <AuthStack.Screen name="Auth" options={{ headerShown: false }}>
      {props => <Auth {...props} setIsAuthenticated={setIsAuthenticated} />}
      </AuthStack.Screen>
        <AuthStack.Screen name="CreateUser" component={CreateUser} options={{ headerShown: false }}/>
        <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}