import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Content from './components/Content';
import { PageWrapper } from 'app/components/PageWrapper';
import {Header} from "app/components/Header";
import {useAuthSlice} from 'app/pages/LoginPage/slice';
import {useDispatch} from "react-redux";
import {useCallback} from "react";

export function HomePage() {
  const { actions } = useAuthSlice();
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    localStorage.clear();
    dispatch(actions.changeAuth(false));
  },[]);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Student Home Page"
        />
      </Helmet>
      <Header title="My Account" label="Logout" onClick={handleLogout} />
      <PageWrapper>
        <Content />
      </PageWrapper>
    </>
  );
}
