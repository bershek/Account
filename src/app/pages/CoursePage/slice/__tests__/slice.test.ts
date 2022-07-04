import * as slice from '..';
import { CoursesState, IPassed } from '../types';
import { RootState } from '../../../../../types';
import { getPassedCourses, getCourseComments, getActiveCourses } from '../selectors';

describe('courses slice', () => {
  let state: CoursesState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });


  test('should start course', () => {

    const previousState: CoursesState = {
      active: [],
      passed: {
        design: ['test desctiption']
      },
      comments: {
        design: 'test comment'
      }
    };

    expect(slice.reducer(previousState,  slice.coursesActions.activeCourse('design'))).toEqual(
      {
        active: ['design'],
        passed: {
          design: ['test desctiption']
        },
        comments: {
          design: 'test comment'
        }
      }
    )
  })

  it('should stop course', () => {
    const previousState: CoursesState = {
      active: ['design'],
      passed: {
        design: ['test desctiption']
      },
      comments: {
        design: 'test comment'
      }
    };
    expect(slice.reducer(previousState,  slice.coursesActions.stopCourse('design'))).toEqual(
      {
        active: [],
        passed: {
          design: ['test desctiption']
        },
        comments: {
          design: 'test comment'
        }
      }
    )
  });

  it('should pass lecture', () => {
    const previousState: CoursesState = {
      active: ['design'],
      passed: {
        design: ['test']
      },
      comments: {
        design: 'test comment'
      }
    };

    expect(slice.reducer(previousState,  slice.coursesActions.passedLectures(
      {name: "design", value: "test lecture"}
      ))).toEqual(
      {
        active: ['design'],
        passed: {
          design: ['test', 'test lecture']
        },
        comments: {
          design: 'test comment'
        }
      }
    )
  });

  it('should add comment', () => {
    const previousState: CoursesState = {
      active: ['design'],
      passed: {
        design: ['test']
      },
      comments: {
        design: 'test comment'
      }
    };

    expect(slice.reducer(previousState, slice.coursesActions.addComment({name: "design", value: "test lecture"}))).toEqual(
      {
        active: ['design'],
        passed: {
          design: ['test']
        },
        comments: {
          design: 'test lecture'
        }
      }
    )
  });

  describe('selectors', () => {
    it('get courses data', () => {
      let state: RootState = {};
      expect(getPassedCourses(state)).toEqual<IPassed>(
        slice.initialState.passed,
      );
      expect(getActiveCourses(state)).toEqual<Array<string>>(
        slice.initialState.active,
      );
      expect(getCourseComments(state)).toEqual<{[key: string]: string}>(
        slice.initialState.comments,
      );
    });
  });
});
