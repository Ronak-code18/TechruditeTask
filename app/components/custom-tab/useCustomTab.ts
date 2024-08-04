import {TabActions, useNavigation} from '@react-navigation/native';
import {Routes} from '../../constants';

const useCustomTab = () => {
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.dispatch(TabActions.jumpTo(Routes.search));
  };

  const handleEvents = () => {
    navigation.dispatch(TabActions.jumpTo(Routes.events));
  };

  const handleFavorites = () => {
    navigation.dispatch(TabActions.jumpTo(Routes.favorites));
  };

  const handleProfile = () => {
    navigation.dispatch(TabActions.jumpTo(Routes.profile));
  };

  return {
    handleEvents,
    handleFavorites,
    handleProfile,
    handleSearch,
  };
};

export default useCustomTab;
