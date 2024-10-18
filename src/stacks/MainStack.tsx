import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {AuthParamsList, AuthStack} from './AuthStack';
import {HomeParamList, HomeStack} from './HomeStack';
import {useTypedSelector} from '../hooks';

type RootStackParamList = AuthParamsList & HomeParamList;

const Stack = createStackNavigator<RootStackParamList>();

export const MainStack = () => {
  const isAuthenticated = useTypedSelector(state => state.auth.isAuthenticated);

  const AuthScreen = AuthStack?.map(stack => (
    <Stack.Screen
      key={stack.name}
      name={stack?.name}
      component={stack?.component}
    />
  ));

  const HomeScreen = HomeStack?.map(stack => (
    <Stack.Screen
      key={stack.name}
      name={stack?.name}
      component={stack?.component}
    />
  ));

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.DefaultTransition,
      }}>
      {isAuthenticated ? HomeScreen : AuthScreen}
    </Stack.Navigator>
  );
};
