import { ThemeState } from 'styles/theme/slice/types';
import {AuthState} from "../app/pages/LoginPage/slice/types";
import { CoursesState } from '../app/pages/CoursePage/slice/types';

export interface RootState {
  theme?: ThemeState;
  auth?: AuthState
  courses?: CoursesState
}
