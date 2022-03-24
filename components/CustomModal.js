import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { useState } from 'react'

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
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity
                onPress={closeModal}
              >
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                Estas a punto de borrar {selectedItem?.amount} {selectedItem?.title} de tu lista de compras
              </Text>
            </View>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                deleteItem()
                closeModal()
              }}
            >
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>CONFIRMAR</Text>
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
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#E4E3E8',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: '50%',
    padding: 10,
    alignItems: 'center'
  },
  closeButtonContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
  },
  modalTextContainer: {
    width: '100%',
    height: '40%',
    //backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: '20%',
    borderRadius: 15,
    marginBottom: 20,
  },
})