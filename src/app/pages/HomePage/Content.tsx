import React from 'react';
import styled from 'styled-components/macro';
import CourseList from "./CourseList";

const Content = (): JSX.Element => {
  return (
    <Wrapper>
      <Title>Courses</Title>
      <CourseList />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${p => p.theme.text};
  margin: 1rem 0;
`;


export default Content;
