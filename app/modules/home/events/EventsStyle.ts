import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
  headerContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
  },
  headerText: {
    fontSize: moderateScale(22),
    fontWeight: '500',
    color: Colors.black,
    margin: moderateScale(1),
  },
  headerSubText: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: Colors.darkGray,
    margin: moderateScale(1),
  },
});
