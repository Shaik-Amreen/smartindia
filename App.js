import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Farmer from './src/Farmer';
import Login from './src/Login';
import ModalDemo from './src/ModalDemo';
import Voice from './src/Voice';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Farmer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems:'center',
    width: '100%',
  },
});
