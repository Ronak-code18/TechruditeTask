import React from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icons, Images} from '../../../assets';
import {LoaderModal} from '../../../components';
import {FormikNames, Placeholders, Strings} from '../../../constants';
import {Colors} from '../../../theme';
import styles from './LoginStyle';
import useLogin from './useLogin';

const Login = () => {
  const {formik, passwordRef, passwordState, handlePasswordState, loading} =
    useLogin();

  return (
    <>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headerText}>{Strings.plie}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.fieldText}>{Strings.email}</Text>
          <TextInput
            placeholder={Placeholders.email}
            onChangeText={formik.handleChange(FormikNames.email)}
            onBlur={formik.handleBlur(FormikNames.email)}
            placeholderTextColor={Colors.darkGray}
            value={formik.values.email}
            style={
              formik.touched.email && formik.errors.email
                ? styles.focusedEmailInput
                : styles.emailInput
            }
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          {formik.touched.email && formik.errors.email && (
            <Text style={styles.error}>{formik.errors.email}</Text>
          )}
          <Text style={styles.fieldText}>{Strings.password}</Text>
          <View
            style={
              formik.touched.password && formik.errors.password
                ? styles.focusedPasswordContainer
                : styles.passwordContainer
            }>
            <TextInput
              ref={passwordRef}
              placeholder={Placeholders.password}
              onChangeText={formik.handleChange(FormikNames.password)}
              onBlur={formik.handleBlur(FormikNames.password)}
              placeholderTextColor={Colors.darkGray}
              value={formik.values.password}
              style={styles.passwordInput}
              autoCapitalize="none"
              returnKeyType="done"
              secureTextEntry={passwordState}
            />
            <Pressable onPress={handlePasswordState}>
              <Image source={Icons.password} style={styles.passwordIcon} />
            </Pressable>
          </View>
          {formik.touched.password && formik.errors.password && (
            <Text style={styles.error}>{formik.errors.password}</Text>
          )}
          <Text style={styles.forgotPassword}>{Strings.forgotPassword}</Text>
          <Pressable style={styles.signInButton} onPress={formik.handleSubmit}>
            <Text style={styles.signInText}>{Strings.signIn}</Text>
          </Pressable>
          <View style={styles.signupContainer}>
            <Text style={styles.notMember}>{Strings.notMember}</Text>
            <Text style={styles.signupFree}>{Strings.signupFree}</Text>
          </View>
          <View style={styles.orSignInContainer}>
            <View style={styles.signInBar} />
            <Text style={styles.orSignInText}>{Strings.orSignInWith}</Text>
            <View style={styles.signInBar} />
          </View>
          <View style={styles.buttonContainer}>
            <Image source={Images.google} style={styles.socialImage} />
            <Image source={Images.apple} style={styles.socialImage} />
            <Image source={Images.facebook} style={styles.socialImage} />
          </View>
          <Text style={styles.guestText}>{Strings.guest}</Text>
        </View>
      </KeyboardAwareScrollView>
      <LoaderModal modal={loading} />
    </>
  );
};

export default Login;
