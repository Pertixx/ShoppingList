import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import React from 'react'

const FoodList = ({ item, complete, removeItem, decreaseAmount, increaseAmount }) => {
  return (
    <TouchableOpacity
      onPress={() => removeItem(item.id)}
      style={styles.container}
    >
      <View style={styles.amountContainer}>
        <Text style={{fontWeight: 'bold'}}>{item.amount.toString()}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={[styles.title, item.completed == true ? styles.completedTitle : null]}>{item.title}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => decreaseAmount(item.id)}
        >
          <AntDesign name="minuscircleo" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => increaseAmount(item.id)}
        >
          <AntDesign name="pluscircleo" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => complete(item.id)}
        >
          <View>
            {
              item.completed != true ? <Entypo name="circle" size={24} color="black" /> : <AntDesign name="checkcircleo" size={24} color="black" />
            }
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default FoodList

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
    flexDirection: 'row',
  },
  titleContainer: {
    width: '60%',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'gray',
  },
  amountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4C9ACC',
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})