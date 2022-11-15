import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable, FlatList } from 'react-native';
import TransactionList from './components/TransactionList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <TransactionList />
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.buttonStyle}>
          <Image style={styles.buttonImage} source={require('./assets/mas.png')} />
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'between',
  },
  body: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 7,
    width: '100%',
    padding: 10,
    borderWidth: 1,
  },
  footer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: '#FFFFFF',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 30,
    height: 30,
  },
});
