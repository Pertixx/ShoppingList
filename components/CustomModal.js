import { Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

const CustomModal = ({ modalActive, selectedItem, closeModal, deleteItem }) => {

  return (
    <Modal
        visible={modalActive}
        transparent={true}
        animationType='fade'
        onRequestClose={() => {
          setModalActive(!modalActive)
        }}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.exclamationContainer}>
              <Ionicons name="alert" size={24} color="white" />
            </View>
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity
                onPress={closeModal}
              >
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                Estas seguro?
              </Text>
              <Text style={{color: 'gray', fontWeight: 'bold'}}>
                De verdad queres borrar {selectedItem?.amount} {selectedItem?.title}? Esta operacion no se puede deshacer
              </Text>
            </View>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                deleteItem()
                closeModal()
              }}
            >
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>CONFIRMAR</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
  )
}

export default CustomModal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000AA',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#E4E3E8',
    borderRadius: 15,
    height: '45%',
    width: '80%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  exclamationContainer: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: '#B2104F',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -35,
    borderWidth: 2,
    borderColor: '#E4E3E8',
  },
  closeButtonContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
  },
  modalTextContainer: {
    width: '100%',
    height: '50%',
    //backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#B2104F',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: '20%',
    borderRadius: 10,
    marginBottom: 20,
  },
})