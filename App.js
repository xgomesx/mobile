import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MinMax from './Components/MinMax';
import Comp2 from './Components/semana2/Comp2';

export default function App() {
  return (
    <View >
      <Text>
        gigantes
      </Text>
      <Nume Min={1} Max={100}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textShadowColor: 'red',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
