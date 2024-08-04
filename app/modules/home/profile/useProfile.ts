import {CommonActions, useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {Routes} from '../../../constants';
import {rootActions, useAppDispatch} from '../../../redux';

const useProfile = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const parent = navigation.getParent();

  const handleLogout = () => {
    Alert.alert('Are you sure to logout?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: () => {
          dispatch(rootActions.setUser(null));
          parent?.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: Routes.authNavigation}],
            }),
          );
        },
      },
    ]);
  };

  return {handleLogout};
};

export default useProfile;
