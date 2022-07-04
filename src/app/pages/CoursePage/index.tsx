import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import {Header} from "app/components/Header";
import { courses } from 'utils/coursesData';
import { RouteComponentProps } from 'react-router';
import Content from './components/Content';

interface MatchParams {
  [key: string]: string;
}

type CallbackType = (...args: string[]) => void

export const CoursePage = (props: RouteComponentProps<MatchParams>): JSX.Element => {
  const {match: {params: { id }}, history: {goBack}} = props;
  const { title, description, content } = courses[id];
  const handleBack  = useCallback<CallbackType>(() => goBack(), []);

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
        <Content
          id={id}
          handleBack={handleBack}
          description={description}
          content={content}
        />
      </PageWrapper>
    </>
  );
};
