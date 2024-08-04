import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: moderateScale(8),
    margin: moderateScale(8),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
  },
  eventImage: {
    height: moderateScale(80),
    width: moderateScale(80),
    resizeMode: 'contain',
    borderRadius: moderateScale(4),
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: horizontalScale(5),
  },
  eventName: {
    fontSize: moderateScale(16),
    color: Colors.black,
    fontWeight: '600',
    margin: moderateScale(1),
  },
  eventDate: {
    fontSize: moderateScale(12),
    color: Colors.lightGreen,
    fontWeight: '500',
    margin: moderateScale(1),
  },
  eventPrice: {
    fontSize: moderateScale(11),
    color: Colors.darkGray,
    fontWeight: '500',
    margin: moderateScale(1),
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  addressText: {
    fontSize: moderateScale(11),
    color: Colors.darkGray,
    fontWeight: '500',
    margin: moderateScale(1),
  },
  arrowIcon: {
    height: moderateScale(20),
    width: moderateScale(20),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonIcon: {
    height: moderateScale(20),
    width: moderateScale(20),
    resizeMode: 'contain',
    margin: moderateScale(5),
  },
  danceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  danceView: {
    backgroundColor: Colors.gray,
    borderRadius: moderateScale(25),
    margin: moderateScale(1),
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(8),
  },
  danceText: {
    fontSize: moderateScale(12),
    color: Colors.darkGray,
    fontWeight: '500',
  },
});
