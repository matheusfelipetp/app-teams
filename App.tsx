import { Groups } from './src/screens/Groups';
import { ThemeProvider } from 'styled-components';
import { Loader } from '@components/Loader';
import { StatusBar } from 'react-native';
import theme from './src/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

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

      {fontsLoaded ? <Groups /> : <Loader />}
    </ThemeProvider>
  );
}
