import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {BaseURL, EndPoints} from '../constants';

export const loginUser = createAsyncThunk(
  'loginUser',
  async ({email, password}: {email: string; password: string}) => {
    try {
      const config: AxiosRequestConfig = {
        method: 'POST',
        url: BaseURL + EndPoints.loginUser,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          email,
          password,
        }),
      };

      const response: AxiosResponse = await axios.request(config);
      return response;
    } catch (error) {
      return error;
    }
  },
);

export const eventsListing = createAsyncThunk(
  'eventsListing',
  async ({token}: {token: string}) => {
    try {
      const config: AxiosRequestConfig = {
        method: 'POST',
        url: BaseURL + EndPoints.eventsListing,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const response: AxiosResponse = await axios.request(config);
      return response;
    } catch (error) {
      return error;
    }
  },
);
