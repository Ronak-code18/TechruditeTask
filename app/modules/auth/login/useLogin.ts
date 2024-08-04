import {CommonActions, useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {useRef, useState} from 'react';
import {Alert, TextInput} from 'react-native';
import * as Yup from 'yup';
import {Routes, Validation} from '../../../constants';
import {rootActions, useAppDispatch} from '../../../redux';
import {loginUser} from '../../../services';

const useLogin = () => {
  const dispatch = useAppDispatch();
  const passwordRef = useRef<TextInput>(null);
  const [passwordState, setPasswordState] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const parent = navigation.getParent();

  const handlePasswordState = () => {
    setPasswordState(!passwordState);
  };

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setLoading(true);
      const response: any = await dispatch(loginUser({email, password}));
      setLoading(false);

      if (response?.payload?.data?.success === true) {
        dispatch(
          rootActions.setUser({
            ...response?.payload?.data?.data?.user,
            token: response?.payload?.data?.data?.token,
          }),
          parent?.dispatch(CommonActions.navigate(Routes.tabNavigation)),
        );
      } else {
        Alert.alert(response?.payload?.data?.message);
      }
    } catch (error) {
      return;
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
    validationSchema: Yup.object({
      email: Yup.string()
        .email(Validation.emailInvalid)
        .required(Validation.emailRequire),
      password: Yup.string()
        .min(8, Validation.passwordInvalid)
        .required(Validation.passwordRequire),
    }),
  });

  return {formik, passwordRef, passwordState, handlePasswordState, loading};
};

export default useLogin;
