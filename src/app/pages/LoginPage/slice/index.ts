import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import {AuthState} from "./types";

const getFromStorage = () => Boolean(localStorage.getItem('user'));

export const initialState: AuthState = {
  authenticated: getFromStorage() || false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuth(state, action: PayloadAction<boolean>) {
      state.authenticated = action.payload;
    },
  },
});

export const { actions: authActions, reducer } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
