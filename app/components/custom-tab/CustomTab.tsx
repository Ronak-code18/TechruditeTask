import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {Icons} from '../../assets';
import {Strings} from '../../constants';
import styles from './CustomTabStyle';
import useCustomTab from './useCustomTab';

const CustomTab = () => {
  const {handleEvents, handleFavorites, handleProfile, handleSearch} =
    useCustomTab();

  return (
    <View style={styles.container}>
      <Pressable onPress={handleSearch} style={styles.button}>
        <Image source={Icons.search} style={styles.buttonImage} />
        <Text style={styles.buttonText}>{Strings.search}</Text>
      </Pressable>
      <Pressable onPress={handleEvents} style={styles.button}>
        <Image source={Icons.events} style={styles.buttonImage} />
        <Text style={styles.buttonText}>{Strings.events}</Text>
      </Pressable>
      <Pressable onPress={handleFavorites} style={styles.button}>
        <Image source={Icons.like} style={styles.buttonImage} />
        <Text style={styles.buttonText}>{Strings.favorites}</Text>
      </Pressable>
      <Pressable onPress={handleProfile} style={styles.button}>
        <Image source={Icons.profile} style={styles.buttonImage} />
        <Text style={styles.buttonText}>{Strings.profile}</Text>
      </Pressable>
    </View>
  );
};

export default CustomTab;
