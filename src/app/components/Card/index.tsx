import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from '../Link';

interface Props {
  label: string,
  image: string,
  href: string
}

export function Card({label, image, href}: Props) {
  return (
    <Wrapper>
      <Link to={href}>
        <Item>
          <Img src={image} alt="icon" />
          <Title>{label}</Title>
        </Item>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;
const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 1.25rem;
  margin: 0 auto 1.25rem;
`;

const Title = styled.h4`
  font-size: 2rem;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  color: ${p => p.theme.text};
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5rem;
`;
