import * as slice from '..';
import { AuthState } from '../types';
import { RootState } from '../../../../../types';
import { getAuth } from '../selectors';

describe('auth slice', () => {
  let state: AuthState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should changeTheme', () => {
    expect(
      slice.reducer(state, slice.authActions.changeAuth(false)),
    ).toEqual<AuthState>({ authenticated: false });
  });

  describe('selectors', () => {
    it('getAuth', () => {
      let state: RootState = {};
      expect(getAuth(state)).toEqual<boolean>(
        slice.initialState.authenticated,
      );

      state = {
        auth: { authenticated: false },
      };
      expect(getAuth(state)).toEqual<boolean>(
        state.auth!.authenticated,
      );
    });
  });
});
