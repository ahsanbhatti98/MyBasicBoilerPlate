import {createStackNavigator} from '@react-navigation/stack';
import {AuthParamsList, AuthStack} from './AuthStack';
import {HomeParamList, HomeStack} from './HomeStack';

 type RootStackParamList = AuthParamsList & HomeParamList;

const Stack = createStackNavigator<RootStackParamList>();

export const MainStack = () => {
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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* {AuthScreen} */}
      {HomeScreen}
    </Stack.Navigator>
  );
};
