import React, {useCallback, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import {Header} from '../../components/Header';
import Login from "./Login";

const LoginPage = ():JSX.Element => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const handleShowLogin = useCallback((state: boolean): void => {
    setShowLogin(state);
  }, []);

  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta
          name="description"
          content="Student Login Page"
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
