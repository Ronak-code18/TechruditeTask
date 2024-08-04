import {StyleSheet} from 'react-native';
import {Colors, moderateScale} from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.white,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(5),
  },
  buttonImage: {
    height: moderateScale(22),
    width: moderateScale(22),
    resizeMode: 'contain',
    margin: moderateScale(1),
  },
  buttonText: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: Colors.black,
    margin: moderateScale(1),
  },
});
