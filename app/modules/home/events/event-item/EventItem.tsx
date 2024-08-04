import React from 'react';
import {Image, Text, View} from 'react-native';
import {Icons} from '../../../../assets';
import {Event} from '../../../../types';
import styles from './EventItemStyle';

const EventItem = ({item}: {item: Event}) => {
  return (
    <View style={styles.container}>
      {item?.event_profile_img && (
        <Image
          style={styles.eventImage}
          source={{uri: item?.event_profile_img}}
        />
      )}
      <View style={styles.middleContainer}>
        <Text numberOfLines={1} style={styles.eventName}>
          {item?.event_name}
        </Text>
        <Text numberOfLines={1} style={styles.eventDate}>
          {item?.readable_from_date}
        </Text>
        <Text
          numberOfLines={1}
          style={
            styles.eventPrice
          }>{`$${item?.event_price_from} - $${item?.event_price_to}`}</Text>
        <View style={styles.danceContainer}>
          {item?.danceStyles?.map((item: any, index: number) => (
            <View key={index} style={styles.danceView}>
              <Text style={styles.danceText}>{item?.ds_name}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Image source={Icons.arrow} style={styles.arrowIcon} />
        <Text
          numberOfLines={1}
          style={styles.addressText}>{`${item?.city}, ${item?.country}`}</Text>
        <View style={styles.buttonContainer}>
          <Image style={styles.buttonIcon} source={Icons.share} />
          <Image source={Icons.like} style={styles.buttonIcon} />
        </View>
      </View>
    </View>
  );
};

export default EventItem;
