import React from 'react';
import { View, Text, FlatList, StyleSheet,Button,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




interface Destination {
  id: string;
  name: string;
  description: string;
  bestTimeToTravel: string;
}



const destinations: Destination[] = [
  { id: '1', name: 'Yamotri Temple', description: 'Nestled in the Garhwal Himalayas, Yamunotri is revered as the source of the sacred Yamuna River, attracting pilgrims seeking spiritual solace amidst its serene surroundings.', bestTimeToTravel: 'May to October', imageUri: 'https://www.bontravelindia.com/wp-content/uploads/2021/09/Yamunotri-Temple.jpg'},
  { id: '2', name: 'Gangotri Temple', description: 'Situated amidst the majestic peaks of the Himalayas, Gangotri holds profound significance as the origin of the holy Ganges River, drawing devotees and trekkers alike to its pristine landscapes.' , bestTimeToTravel: 'May to October', imageUri: 'https://www.bontravelindia.com/wp-content/uploads/2021/09/Gangotri-Temple.jpg'},
  { id: '3', name: 'Kedarnath Temple', description: 'Nestled in the Garhwal Himalayas, Kedarnath is a sacred Hindu pilgrimage site renowned for its ancient temple dedicated to Lord Shiva, situated amidst stunning mountain scenery at an altitude of 3,583 meters.' , bestTimeToTravel: 'May to October', imageUri: 'https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/06/16111548/Kedarnath.jpg'},
  { id: '4', name: 'Badrinath Temple', description: 'Located in the Chamoli district of Uttarakhand, Badrinath is a revered pilgrimage destination housing the iconic Badrinath Temple dedicated to Lord Vishnu, attracting devotees seeking spiritual solace amidst the picturesque backdrop of the Himalayas.' , bestTimeToTravel: 'May to October', imageUri: 'https://www.bontravelindia.com/wp-content/uploads/2021/09/Badrinath-Temple.jpg'}
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
    <Text></Text>
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
      <View style={styles.footer}>
  <Icon.Button 
    name="facebook" 
    backgroundColor="#3b5998"
    onPress={this.loginWithFacebook}>
    Facebook
  </Icon.Button>
  <Icon.Button 
    name="twitter" 
    backgroundColor="#1da1f2"
    onPress={this.loginWithTwitter}>
    Twitter
  </Icon.Button>
  <Icon.Button 
    name="google" 
    backgroundColor="#db4437"
    onPress={this.loginWithGoogle}>
    Google
  </Icon.Button>
   </View>
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Align items evenly along the row
    padding: 10,
    backgroundColor: '#f8f8f8', // Light gray background
    borderTopWidth: 10, // Add a border to the top of the footer
    borderColor: '#e7e7e7', // Light gray border
    alignItems: 'center', // Vertically center the icons
    height: 65, // Set a fixed height for the footer
  },
});
