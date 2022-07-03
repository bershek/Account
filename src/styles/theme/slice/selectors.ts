import { createSelector } from '@reduxjs/toolkit';

import { RootState } from './../../../types';
import { initialState } from '.';
import { themes } from '../themes';

export const selectTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    if (theme.selected === 'system') return themes.light;
    return themes[theme.selected];
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selected,
);
