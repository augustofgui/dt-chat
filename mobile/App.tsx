import React from 'react';

import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { NativeBaseProvider } from 'native-base';
import { customTheme } from '@styles/theme';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { Routes } from '@routes/index';
import { Loading } from '@components/UI/Loading';

import { AppProvider } from '@contexts/app-context';

import { useAuth } from '@hooks/useAuth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  const { isLoadingUserData } = useAuth();

  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" style="light" />

        {!fontsLoaded || isLoadingUserData ? <Loading /> : (
          <AppProvider>
            <Routes />
          </AppProvider>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
