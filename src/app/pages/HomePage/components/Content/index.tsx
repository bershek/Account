import React from 'react';
import styled from 'styled-components/macro';
import { CourseList } from '../CourseList';
import { Wrapper } from 'app/components/Wrapper';

const Content = (): JSX.Element => {
  return (
    <Wrapper>
      <Title>Courses</Title>
      <CourseList />
    </Wrapper>
  );
};

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${p => p.theme.text};
  margin: 1rem 0;
`;

export default Content;
