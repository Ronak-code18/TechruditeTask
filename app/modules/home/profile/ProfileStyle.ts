import {StyleSheet} from 'react-native';
import {Colors, moderateScale} from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
  button: {
    backgroundColor: Colors.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(10),
    margin: moderateScale(20),
    borderRadius: moderateScale(5),
  },
  buttonText: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: Colors.white,
  },
});
