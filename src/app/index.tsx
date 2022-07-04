import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from "./pages/HomePage/Loadable";
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import LoginPage from "./pages/LoginPage";
import {useSelector} from "react-redux";
import {getAuth} from "./pages/LoginPage/slice/selectors";
import {CoursePage} from "./pages/CoursePage";

export function App() {
  const authState = useSelector(getAuth);

  return (
    <BrowserRouter>
      <Helmet titleTemplate="MyAccount" defaultTitle="MyAccount">
        <meta name="description" content="MyAccount application" />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={authState ? HomePage : LoginPage} />
        <Route path={process.env.PUBLIC_URL + '/course/:id'} component={CoursePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
