import { StyleSheet, Image, ScrollView, useColorScheme} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const face = require('./images/face.jpg')
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (

    <View
    style={[
      {
        flex: 1,
        justifyContent: 'center',
        alignItem: 'center',
      },
      isDarkTheme
        ? { backgroundColor: 'black' }
        : { backgroundColor: 'white' },
    ]}>
      
          <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
      <Text style={[isDarkTheme ? { color: 'white' } : { color: 'black' }]}>My Profile</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image source={face}></Image>
      <Text>Hello, my name is Juan Miguel G. Francisco. I like pizza, talking about random things and games. I am a beginner in React js and React Native,</Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
