import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux';
import {eventsListing} from '../../../services';
import {Event} from '../../../types';

const useEvents = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.root.user);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response: any = await dispatch(
          eventsListing({token: user?.token as string}),
        );
        setLoading(false);

        if (response?.payload?.data?.success === true) {
          setEvents(response?.payload?.data?.data?.events);
        } else {
          Alert.alert(response?.payload?.data?.message);
        }
      } catch (error) {
        return;
      }
    })();
  }, []);

  return {events, loading};
};

export default useEvents;
