import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {Colors} from '../../theme';
import styles from './LoaderModalStyle';

const LoaderModal = ({modal}: {modal: boolean}) => {
  return (
    <Modal transparent visible={modal}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.black} />
      </View>
    </Modal>
  );
};

export default LoaderModal;
