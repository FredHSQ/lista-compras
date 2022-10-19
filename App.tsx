import React from 'react';
import { StatusBar } from 'react-native';

import theme from './src/theme';
import { Loading } from './src/components/Loading';

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';
import { Lista } from './src/screens/Lista';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
        {fontsLoaded ? <Lista /> : <Loading/>}
    </ThemeProvider>
  );
}

