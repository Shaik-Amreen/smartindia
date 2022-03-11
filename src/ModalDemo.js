import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Login from './Login';

const ModalDemo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Button title="Click here to login" onPress={toggleModal} />
      <Modal isVisible={isModalVisible}>
        <View>
          <Login />
          <View>
            <Button title="Hide modal" style={{ margin: '100px', }} onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ModalDemo;