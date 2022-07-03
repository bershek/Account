import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from '.';

export const getPassedCourses = createSelector(
  [(state: RootState) => state.courses || initialState],
  courses => courses.passed,
);

export const getActiveCourses = createSelector(
  [(state: RootState) => state.courses || initialState],
  courses =>  courses.active,
);

export const getCourseComments = createSelector(
  [(state: RootState) => state.courses || initialState],
  courses =>  courses.comments,
);