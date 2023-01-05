import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName='sign-in'
      screenOptions={{ headerShown: false }}
    >
      <Screen name='sign-in' component={SignIn} />
      <Screen name='sign-up' component={SignUp} />
    </Navigator>
  );
}
