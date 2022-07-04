import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Button } from 'app/components/Button';
import { ILecture } from '@utils/coursesData';
import { useCoursesSlice } from '../../slice';
import { useDispatch, useSelector } from 'react-redux';
import { getPassedCourses } from '../../slice/selectors';
import Table from '../Table';
import { Wrapper } from 'app/components/Wrapper';
import styled from 'styled-components/macro';

interface ContentProps {
  id: string,
  handleBack(): void
  description: string
  content: Array<ILecture>
}

type CallbackType = (...args: {name: string, value: string}[]) => void

const Content = ({ id, description, content }: ContentProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearchValue = useCallback(() =>
    setSearchValue(searchRef?.current?.value || ""), []);
  const { actions } = useCoursesSlice();
  const dispatch = useDispatch();
  const passedCoursesState = useSelector(getPassedCourses);
  const handlePassLectures = useCallback<CallbackType>((data) =>
    dispatch(actions.passedLectures(data)), []);
  const handleSetComment = useCallback<CallbackType>((data) =>
  {dispatch(actions.addComment(data))}, []);
  const passedCourses = useMemo(() => (passedCoursesState[id] || []), [passedCoursesState, id]);

  const tableContent = useMemo(() =>
      searchValue
        ? content.filter(({title}) => {
          const value = title.toLocaleLowerCase();
          const checkValue = searchValue.trim().toLocaleLowerCase();
          return value.includes(checkValue);
        })
        : content,
    [searchValue]);
  console.log("tableContent", tableContent);
  return (
    <Wrapper>
      <Title>{description}</Title>
      <SearchWrap>
        <input type="text" ref={searchRef} placeholder="Type lecture name"/>
        <Button label="Search" onClick={handleSearchValue}/>
      </SearchWrap>
      <Table
        title={id}
        content={tableContent}
        searchValue={searchValue}
        handlePassLectures={handlePassLectures}
        handleSetComment={handleSetComment}
        passedCourses={passedCourses}
      />
    </Wrapper>
  );
};

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.25rem;
  margin: 2rem 0;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${p => p.theme.text};
  margin: 1rem 0;
`;

export default Content;
