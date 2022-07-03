import React, { useCallback } from 'react';
import {Card} from "../../components/Card";
import { ICONS, NO_IMAGE_PLACEHOLDER } from 'utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useCoursesSlice } from '../CoursePage/slice';
import { Button } from '../../components/Button';
import { getAuth } from '../LoginPage/slice/selectors';
import { getActiveCourses } from '../CoursePage/slice/selectors';
import styled from 'styled-components';

const CourseList = (): JSX.Element => {
  const { actions } = useCoursesSlice();
  const dispatch = useDispatch();
  const activeCourseState = useSelector(getActiveCourses);

  const handleActiveCourse =(id) => dispatch(actions.activeCourse(id));
  const handleStopCourse = (id) => dispatch(actions.stopCourse(id));

  return (
    <List>
      {
        Object.keys(ICONS).map((course: string) => {
          const imgSrc = ICONS[course] ? ICONS[course]: NO_IMAGE_PLACEHOLDER;
          return (
            <CardWrapper key={course}>
              <Card
                label={course}
                href={`/course/${course}`}
                image={`${process.env.PUBLIC_URL}/assets/${imgSrc}-icon.webp`}
              />
              <Button
                label={activeCourseState.includes(course) ? "stop" : "start"}
                onClick={activeCourseState.includes(course)? handleStopCourse.bind(null, course) : handleActiveCourse.bind(null, course)}
              />
            </CardWrapper>
          )
        })
      }
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: flex-start;
  width: 100%;
  max-width: 900px;
  column-gap: 2rem;
  row-gap: 2rem;
  padding: 2rem;
  min-height: 320px;
  list-style-type: none;
  text-decoration: none;
  color: ${p => p.theme.text};
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  text-decoration: none;
`;

export default CourseList;