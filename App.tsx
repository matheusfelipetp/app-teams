import { Loader } from '@components/Loader';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { Routes } from '@routes/index';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loader />}
    </ThemeProvider>
  );
}
