import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from '../Link';
import { sizes } from 'styles/media';

interface CardProps {
  label: string,
  image: string,
  href: string
}

const Card = ({label, image, href}: CardProps): JSX.Element => {
  return (
    <Wrapper>
      <Link to={process.env.PUBLIC_URL + href}>
        <Item>
          <Title>{label}</Title>
          <Img src={image} alt="icon" />
        </Item>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin-bottom: 1.25rem;
`;
const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 1.25rem;
  margin: 0 auto 1.25rem;
`;

const Title = styled.h4`
  font-size: 1rem;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: left;
  color: ${p => p.theme.text};
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  @media (max-width: ${sizes.small}px) {
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

export default Card;