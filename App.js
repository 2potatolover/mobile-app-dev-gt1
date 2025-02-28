import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';

const face = require("./photos/face.jpg")
const reactnative = require("./photos/reactnative.png")
const react = require("./photos/react.png")
const nodejs = require("./photos/nodejs.png")
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'React Portfolio',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Store Inventory',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Payroll App',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.normalText}>{title}</Text>
    
  </View>
);

const App = () => (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.innerText} > {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}Juan's Portfolio </Text>
      
      <Text style={styles.normalText} > {"\n"}Hello my name is Juan Miguel G. Francisco and I like pizza and sleeping.</Text>
      <Image source={face} style={styles.face} />

      <Text style={styles.innerText} >{"\n"}{"\n"}Skills </Text>

      <Text style={styles.normalText} > {"\n"}I am a begginer in: {"\n"}{"\n"}</Text>
      

      <Image source={reactnative} style={styles.face} />
      <Text>{"\n"}{"\n"}</Text>

      <Image source={react} style={styles.face} />
      <Text>{"\n"}{"\n"}</Text>

      <Image source={nodejs} style={styles.face} />

      <Text style={styles.innerText} >{"\n"}{"\n"}Projects I worked on: </Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.innerText} >{"\n"}{"\n"}Socials: </Text>
      <Text style={styles.normalText} > {"\n"}Facebook: https://www.facebook.com/juanmiguel.francisco {"\n"}{"\n"} Email: juan_miguel_francisco@dlsl.edu.ph</Text>
      </ScrollView>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30
  },
  normalText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15
  },
  face: {
    width: 150,
    height: 150,
    
    
  }
});

export default App;