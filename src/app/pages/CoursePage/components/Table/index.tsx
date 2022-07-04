import React, { useEffect, useMemo, useState } from 'react';
import styled from "styled-components/macro";
import { ILecture } from 'utils/coursesData';
import Row  from '../Row';

interface TableProps {
  content: Array<ILecture>,
  title: string,
  searchValue: string,
  handlePassLectures(payload): void,
  handleSetComment(payload): void,
  passedCourses: Array<string>
}

const Table = ({content, title, handlePassLectures, handleSetComment, passedCourses}: TableProps): JSX.Element => {
  const [sortByLecture, setSortByLecture] = useState<boolean>(false);
  const [sortByTime, setSortByTime] = useState<boolean>(false);
  const [tableContent, setTableContent] = useState<Array<ILecture>>(content);

  const handleAsc = async (list, option) => {
    let currentList = [...list];
    await currentList.sort((a,b) => a[option] - b[option]);
    setTableContent(currentList);
  };

  const handleDesc = async (list, option) => {
    let currentList = [...list];
    await currentList.sort((a,b) => b[option] - a[option]);
    setTableContent(currentList);
  };

  const handleClickLecture = () => setSortByLecture(!sortByLecture);
  const handleClickTime = () => setSortByTime(!sortByTime);

  const toggleSort = (sortBy, option) => sortBy ? handleAsc(tableContent, option) : handleDesc(tableContent, option);

  useEffect(() => {
    toggleSort(sortByLecture, "lectures");
  }, [sortByLecture]);

  useEffect(() => {
    toggleSort(sortByTime,"time");
  }, [sortByTime]);

  useEffect(() => {
    content && setTableContent(content);
  }, [content]);

  const table = useMemo(() => tableContent.map((block) => (
    <Row
      key={block.id}
      title={title}
      handleSetComment={handleSetComment}
      handlePassLectures={handlePassLectures}
      finished={passedCourses.includes(block.title)}
      row={block}
    />
  )), [tableContent, handleSetComment, handlePassLectures, passedCourses]);

  const tableHead = (
    <tr>
      <Th>Passed</Th>
      <Th>Lecture Block</Th>
      <Th onClick={handleClickLecture}>Lecture Count</Th>
      <Th onClick={handleClickTime}>Lecture Time</Th>
      <Th>Comment</Th>
      <Th/>
    </tr>
  );

  return(
    <Tab>
      {tableHead}
      {table}
    </Tab>
  )
};

const Tab = styled.table`
  width: 100%;
  padding: 1rem;
  color: ${p => p.theme.text};
`;

const Th = styled.th`
  height: 2.5rem;
  text-align: left;
  color: ${p => p.theme.text};
  cursor: pointer;
  user-select: none;
`;

export default Table;