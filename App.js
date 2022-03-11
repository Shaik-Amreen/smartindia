import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Farmer from './src/Farmer';
import Login from './src/Login';
import ModalDemo from './src/ModalDemo';

export default function App() {
  return (
    <View style={styles.container}>
      <Farmer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'black'
  },
});
