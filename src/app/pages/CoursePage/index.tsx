import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import {Header} from "../../components/Header";
import { courses } from 'utils/coursesData';
import Table from './Table';
import { useCoursesSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { getPassedCourses } from './slice/selectors';
import { Button } from '../../components/Button';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
  [key: string]: string;
};

type CallbackType = (...args: string[]) => void

export const CoursePage = (props: RouteComponentProps<MatchParams>): JSX.Element => {
  const {match: {params: { id }}, history: {goBack}} = props;
  const { title, description, content } = courses[id];
  const [searchValue, setSearchValue] = useState<string>('');
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearchValue = useCallback(() => setSearchValue(searchRef?.current?.value || ""), []);
  const handleBack  = useCallback(() => goBack(), []);
  const { actions } = useCoursesSlice();
  const dispatch = useDispatch();
  const passedCoursesState = useSelector(getPassedCourses);
  const handlePassLectures = useCallback<CallbackType>((data) => dispatch(actions.passedLectures(data as unknown as {name: string, value: string})), []);
  const handleSetComment = useCallback<CallbackType>((data) => {dispatch(actions.addComment(data as unknown as {name: string, value: string}))}, []);
  const passedCourses = useMemo<Array<string>>(() => passedCoursesState[id] || [], [id]);

  const tableContent = useMemo(() =>
    searchValue
      ? content.filter(({title}) => {
        const value = title.toLocaleLowerCase();
        const checkValue = searchValue.trim().toLocaleLowerCase();
        return value.includes(checkValue);
        })
      : content,
    [searchValue]);

  return (
    <>
      <Helmet>
        <title>Course Page</title>
        <meta
          name="description"
          content="Student Course Page"
        />
      </Helmet>
      <Header title={title} label="Back" onClick={ handleBack} />

      <PageWrapper>
        <h2>{description}</h2>
        <input type="text" ref={searchRef} />
        <Button label="Search" onClick={handleSearchValue}/>
        <Table
          title={id}
          content={tableContent}
          searchValue={searchValue}
          handlePassLectures={handlePassLectures}
          handleSetComment={handleSetComment}
          passedCourses={passedCourses}
        />
      </PageWrapper>
    </>
  );
};
