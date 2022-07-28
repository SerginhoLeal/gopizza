import * as React from 'react';

// AppLoading segura o splash deixando ela visivel até tudo carregar
import AppLoading from 'expo-app-loading';

import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

import { ThemeProvider } from "styled-components/native";
import theme from '@src/theme';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if(!fontsLoaded){
    return <AppLoading />
  };

  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
};
