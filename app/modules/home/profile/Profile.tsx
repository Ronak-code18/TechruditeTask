import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Strings} from '../../../constants';
import styles from './ProfileStyle';
import useProfile from './useProfile';

const Profile = () => {
  const {handleLogout} = useProfile();

  return (
    <View style={styles.container}>
      <Pressable onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>{Strings.logout}</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
