import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCoursesSlice } from 'app/pages/CoursePage/slice';
import Card from 'app/components/Card';
import { ICONS, NO_IMAGE_PLACEHOLDER } from 'utils/constant';
import { Button } from 'app/components/Button';
import styled from 'styled-components';
import { getActiveCourses } from 'app/pages/CoursePage/slice/selectors';

export const CourseList = (): JSX.Element => {
  const { actions } = useCoursesSlice();
  const dispatch = useDispatch();
  const activeCourseState = useSelector(getActiveCourses);

  const handleActiveCourse =(id) => dispatch(actions.activeCourse(id));
  const handleStopCourse = (id) => dispatch(actions.stopCourse(id));

  const renderCourseList = useMemo(() => (
    Object.keys(ICONS).map((course: string) => (
      <CardWrapper key={course}>
        <Card
          label={course}
          href={`/course/${course}`}
          image={`${process.env.PUBLIC_URL}${ICONS[course] ? ICONS[course]: NO_IMAGE_PLACEHOLDER}`}
        />
        <Button
          label={
            activeCourseState.includes(course)
              ? "Stop course"
              : "Start course"
          }
          onClick={
            activeCourseState.includes(course)
              ? handleStopCourse.bind(null, course)
              : handleActiveCourse.bind(null, course)
          }
        />
      </CardWrapper>
    ))), [ICONS, activeCourseState]);

  return (
    <List>{renderCourseList}</List>
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