import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import { useAuthSlice } from '../../slice';
import {Button} from 'app/components/Button';
import { UserError } from 'utils/constant';
import styled from 'styled-components/macro';
import { Wrapper } from 'app/components/Wrapper';

interface LoginProps {
  handleShowLogin(state: boolean): void;
}

const Login = ({handleShowLogin} : LoginProps): JSX.Element => {
  const { actions } = useAuthSlice();
  const dispatch = useDispatch();

  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
    const user = userNameRef?.current?.value;
    const pass = passwordRef?.current?.value;

    new Promise((resolve, reject) => {
      if (!user) reject(UserError.Name);
      if (!pass) reject(UserError.Password);
      resolve("good");
    }).then(() => setLoading(true))
      .then(() => setTimeout(() => {
        localStorage.setItem("user", `${user}_${pass}`);
        setLoading(false);
        dispatch(actions.changeAuth(true));
        handleShowLogin(false);
      }, 3000))
      .catch((error) => {
        dispatch(actions.changeAuth(false));
        handleShowLogin(true);
        setError(error);
      });
  };

  const handleHideError = () => setError('');

  return (
    <Wrapper>
      <Form autoComplete="off">
        <Row>
          <Label htmlFor="name">Name</Label>
          <Field
            id="name"
            type="text"
            placeholder="Type Your Name"
            ref={userNameRef}
            onFocus={handleHideError}
          />
          {error === UserError.Name && <Error>{error}</Error>}
        </Row>
        <Row>
          <Label htmlFor="password">Password</Label>
          <Field
            id="password"
            type="password"
            placeholder="Type Password"
            ref={passwordRef}
            onFocus={handleHideError}
          />
          {error === UserError.Password && <Error>{error}</Error>}
        </Row>
        <Button label={loading ? 'Loading...': 'Send'} onClick={e => handleClick(e)} disabled={error !== ""} />
      </Form>
    </Wrapper>
  );
}

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

`;
const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;

const Field = styled.input`
  width: 100%;
  height: 30px;
  color: ${p => p.theme.text};
  font-size: 14px;
  padding: 7px;
  border: 1px solid ${p => p.theme.border}

  &:placeholder {
    color: ${p => p.theme.textSecondary};
  }
`;

const Error = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 10px;
  color: ${p => p.theme.primary};
`;

export default Login;
