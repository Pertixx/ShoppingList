import { FlatList, Modal, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react'

import AddItem from './components/AddItem';
import CustomModal from './components/CustomModal';
import FoodList from './components/FoodList';

export default function App() {

  const [data, setData] = useState([])
  const [modalActive, setModalActive] = useState(false)
  const [deleteItem, setDeleteItem] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    if (deleteItem) {
      let index = data.indexOf(selectedItem)
      data.splice(index, 1)
      setData([...data])
      setDeleteItem(!deleteItem)
    }
  }, [deleteItem])
  

  const addItemToList = (text) => {
    if (text != undefined && text.length > 0) {
      let newData = [...data, {id: data.length > 0 ? data[data.length - 1].id + 1 : 0, title: text, amount: 1, completed: false}]
      setData(newData)
    }
  }

  const completeFoodList = (id) => {
    const item = data.filter(item => item.id == id)[0]
    const index = data.indexOf(item)
    data[index].completed = !data[index].completed
    setData([...data])
  }

  const removeItemFromList = (id) => {
    setSelectedItem(data.filter(item => item.id == id)[0])
    setModalActive(true)
  }

  const decreaseAmount = (id) => {
    const item = data.filter(item => item.id == id)[0]
    const index = data.indexOf(item)
    if (data[index].amount > 1) {
      data[index].amount -= 1
    }
    setData([...data])
  }

  const increaseAmount = (id) => {
    const item = data.filter(item => item.id == id)[0]
    const index = data.indexOf(item)
    data[index].amount += 1
    setData([...data])
  }

  const renderItem = (item) => {
    return (
      <View style={{padding: 15}}>
        <FoodList
          item={item}
          complete={completeFoodList}
          removeItem={removeItemFromList}
          decreaseAmount={decreaseAmount}
          increaseAmount={increaseAmount}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default"/>
      <CustomModal
        modalActive={modalActive}
        selectedItem={selectedItem}
        closeModal={() => setModalActive(!modalActive)}
        deleteItem={() => setDeleteItem(!deleteItem)}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lista de Compras</Text>
      </View>
      <AddItem onPress={addItemToList}/>
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => renderItem(item)}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={{marginBottom: 130}}/>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E3E8',
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
