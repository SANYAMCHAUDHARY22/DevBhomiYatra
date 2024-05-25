import React from 'react';
import { View, Text, FlatList, StyleSheet,Button,Image } from 'react-native';

interface Destination {
  id: string;
  name: string;
  description: string;
  bestTimeToTravel: string;
}

const destinations: Destination[] = [
  { id: '1', name: 'Yamotri Temple', description: '', bestTimeToTravel: 'May to October', imageUri: 'https://www.bontravelindia.com/wp-content/uploads/2021/09/Yamunotri-Temple.jpg'},
  { id: '2', name: 'Gangotri Temple', description: '' , bestTimeToTravel: 'May to October', imageUri: 'https://www.bontravelindia.com/wp-content/uploads/2021/09/Gangotri-Temple.jpg'},
  { id: '3', name: 'Kedarnath Temple', description: '' , bestTimeToTravel: 'May to October', imageUri: 'https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/06/16111548/Kedarnath.jpg'},
  { id: '4', name: 'Badrinath Temple', description: '' , bestTimeToTravel: 'May to October', imageUri: 'https://www.bontravelindia.com/wp-content/uploads/2021/09/Badrinath-Temple.jpg'}
  // Add more destinations as needed
];

const DestinationItem: React.FC<{ item: Destination }> = ({ item }) => (
  <View style={styles.item}>
    <Image
    style={styles.image}
    source={{uri:item.imageUri}} 
    />
    <Text style={styles.title}>{item.name}</Text>
    <Text>{item.description}</Text>
    <Text>Best Time For Travelling : {item.bestTimeToTravel}</Text>
    <Button 
      title="View Details" 
      onPress={() => {
        // You can handle navigation here
        console.log(`Navigating to ${item.name}`);
      }} 
    />
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.headerTitle}>DevBhomiYatra</Text>
    </View>
    <View style={styles.handle}>
      <Text style={styles.webtile}>www.DevBhomiYatra.com</Text>
    </View>
      <FlatList
        data={destinations}
        renderItem={({ item }) => <DestinationItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    paddingTop: 40,
  },
  item: {
    backgroundColor: 'rgb(339, 192, 12)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
  },
  header: {
    height: 60,
    backgroundColor: 'rgb(0, 128, 128)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
  },
  handle: {
    height: 40,
    backgroundColor: 'rgb(0, 128, 128)',
    justifyContent: 'top',
    alignItems: 'center',
  },
  webtile:{
    fontSize: 20,
    fontWeight: 'italic',
    color: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});