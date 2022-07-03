import React from 'react';
import styled from "styled-components/macro";
import Row from './Row';
import { ICourse, ILecture } from '@utils/coursesData';

interface TableProps {
  content: Array<ILecture>,
  title: string,
  searchValue: string,
  handlePassLectures(payload): void,
  handleSetComment(payload): void,
  passedCourses: Array<string>
}

const Table = ({content, title, searchValue, handlePassLectures, handleSetComment, passedCourses}: TableProps): JSX.Element => {
  return(
    <Tab>
      <tr>
        <Th>Passed</Th>
        <Th>Lecture Block</Th>
        <Th>Count</Th>
        <Th>Time</Th>
        <Th>Comment</Th>
        <Th></Th>
      </tr>
      {
        content && content.map((block)=> (
          <Row
            key={block.id}
            title={title}
            handleSetComment={handleSetComment}
            searchValue={searchValue}
            handlePassLectures={handlePassLectures}
            finished={passedCourses.includes(block.title)}
            row={block}
          />
        ))
      }
    </Tab>
  )
};

const Tab = styled.table`
  width: 100%;
  max-width: 900px;
  padding: 1rem;
  color: ${p => p.theme.text};
`;

const Th = styled.th`
  height: 2.5rem;
  text-align: left;
  color: ${p => p.theme.text};
`;



export default Table;