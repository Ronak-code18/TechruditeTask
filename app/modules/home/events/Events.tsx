import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {LoaderModal} from '../../../components';
import {Strings} from '../../../constants';
import {EventItem} from './event-item';
import styles from './EventsStyle';
import useEvents from './useEvents';

const Events = () => {
  const {events, loading} = useEvents();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{Strings.helloRenzo}</Text>
          <Text style={styles.headerSubText}>{Strings.areYouReady}</Text>
        </View>
        <FlatList
          data={events}
          bounces={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <EventItem item={item} />}
          keyExtractor={(_, index) => index?.toString()}
        />
      </View>
      <LoaderModal modal={loading} />
    </>
  );
};

export default Events;
