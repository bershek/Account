import React, {useCallback, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import {Header} from 'app/components/Header';
import Login from './components/Login';

type CallbackType = (...args: boolean[]) => void;

const LoginPage = ():JSX.Element => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const handleShowLogin = useCallback<CallbackType>((state: boolean): void => {
    setShowLogin(state);
  }, []);

  return (
    <>
      <Helmet>
        <title>Index Page</title>
        <meta
          name="description"
          content="Student Index Page"
        />
      </Helmet>
      <Header title="Login Page" label="Login" onClick={handleShowLogin} />
      <PageWrapper>
        { showLogin && <Login handleShowLogin={handleShowLogin} />}
      </PageWrapper>
    </>
  );
}

export default LoginPage
