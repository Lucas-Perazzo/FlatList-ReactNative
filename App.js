import React from 'react';
import {StyleSheet, Text, View, Image, FlatList,Array, ImageBackground, TextInput} from 'react-native';

class FoodCategory {
  id: String
  category: String
  image: String
  constructor (id: String, category: String, image: String) {
    this.id = id
    this.category = category
    this.image = image
  }
}

const restaurants: Array<FoodCategory> = [
  new FoodCategory('1', 'Pizza', require('./assets/pizza.jpg')),
  new FoodCategory('2', 'Sushi', require('./assets/sushi.jpg')),
  new FoodCategory('3', 'Veggie', require('./assets/veggie.jpg')),
  new FoodCategory('4', 'Pasta', require('./assets/pasta.jpg')),
  new FoodCategory('5', 'Parrilla', require('./assets/parrilla.jpg')),
  new FoodCategory('6', 'Panificados', require('./assets/panificados.jpg')),
  new FoodCategory('7', 'Milanesas', require('./assets/milanesa.jpg')),
  new FoodCategory('8', 'Hamburguesas', require('./assets/hamburguesa.jpg')),
  new FoodCategory('9', 'Fiambres', require('./assets/fiambres.jpg')),
  new FoodCategory('10', 'Dulces', require('./assets/dulces.jpg')),
  new FoodCategory('11', 'Cafetería', require('./assets/cafeteria.jpg')),
  new FoodCategory('12', 'Bebidas', require('./assets/bebidas.jpg'))
]

const renderRestaurants = ({ item } : { item: FoodCategory}) => {
  return (
    <View style={styles.cards}>
        <ImageBackground 
        style={styles.imagen} 
        source={item.image}
        imageStyle={{ borderRadius: 20}}
        >
          <Text style={styles.titulo}>{item.category}</Text>
        </ImageBackground>
    </View>
  )
}

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <ImageBackground
          style={styles.headerImg} 
          source={require('./assets/fondo.jpg')}>
              <Text style={styles.headerTitle}>Restaurants</Text>
          </ImageBackground>
      </View>
      <View style={styles.search}>
        <Image 
        style={styles.icon}
        source={require('./assets/search.png')}/>
        <TextInput
            style={styles.input}
            defaultValue="Buscar"
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subtitle}>Categorías principales</Text>
      </View>
     <FlatList 
          keyExtractor={item => item.id}
          style={styles.list} 
          data={restaurants} 
          renderItem={renderRestaurants}
        />
    </View>
  )  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header : {
    width: '100%',
    height: 200
  },
  headerImg: {
    width: '100%',
    height: '100%'
  },
  headerTitle: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    textAlignVertical: 'bottom',
    paddingHorizontal: 10,
    paddingVertical: 40, 
  },
  search:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 15,
    marginLeft: 20
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  input: {
    height: 50,
    width: '50%',
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 30
 },
 subContainer: {
   alignSelf: 'flex-start',
   marginLeft: 10
 },
 subtitle: {
    fontSize: 15,
    fontWeight: 'bold' 
 },
  imagen : {
    width: '100%',
    height: 200,
  },
  titulo: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  cards : {
    padding: 20,
    width: '100%'
  },
  list : {
    width: '100%'
  }
  

})

export default App;