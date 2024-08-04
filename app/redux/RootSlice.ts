import {createSlice} from '@reduxjs/toolkit';
import {User} from '../types';

export const initialState: {user: User | null} = {
  user: null,
};

const RootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const rootReducer = RootSlice.reducer;
export const rootActions = RootSlice.actions;
