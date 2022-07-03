import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { CoursesState, IPassed } from './types';

export const initialState: CoursesState = {
  active: [],
  passed: {},
  comments: {}
};

const slice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    activeCourse(state, action:PayloadAction<string>) {
      state.active = [...state.active, action.payload];
    },
    stopCourse(state, action: any) {
      state.active = state.active.filter((course)=> (course !== action.payload));
    },
    passedLectures(state, action: PayloadAction<{name: string, value: string}>) {
      const { name, value } = action.payload;
      const prevState = state.passed[name] ? state.passed[name] : [];
      const correctValue = prevState.includes(value) ? prevState : [...prevState, value]
      state.passed = {...state.passed, [name]: correctValue};
    },
    addComment(state, action: PayloadAction<{name: string, value: string}>) {
      const { name, value } = action.payload;
      state.comments = {...state.comments, [name]: value};
    }
  },
});

export const { actions: coursesActions, reducer } = slice;

export const useCoursesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
