import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CalculatePage from './Pages/CalculatePage/CalculatePage';
import Home from './Pages/Home/Home';

export default function App() {
  return (
    <View style={styles.container}>

      <Home />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
