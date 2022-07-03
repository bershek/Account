import React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { PageWrapper } from '../PageWrapper';
import {Button} from "../Button";

interface Props {
  label: string;
  title: string;
  onClick?(): void
}


export function Header(props: any) {
  const { label, title, onClick } = props;
  return (
    <Wrapper>
      <PageWrapper>
        <Title>{title}</Title>
        <Button label={label} onClick={onClick} />
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.HEADER_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2rem;
  background-color: ${p => p.theme.background};
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
  p.theme.background.replace(
    /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
    'rgba$1,0.75)',
  )};
  }

  ${PageWrapper} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: ${p => p.theme.text};
  margin: 1rem 0;
  text-transform: capitalize;
`;
