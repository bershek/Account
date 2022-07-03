import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from '.';

export const getAuth = createSelector(
  [(state: RootState) => state.auth || initialState],
  auth => auth.authenticated,
);
