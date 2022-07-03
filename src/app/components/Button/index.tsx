import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
  label: string;
  className?: string;
  onClick?(e): void;
  disabled?: boolean;
}

export const Button = memo(
  ({ label, className, onClick, ...restOf }: Props) => {
    return (
      <Wrapper className={className}>
        <button onClick={onClick} {...restOf}>{label}</button>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  div {
    display: block;
    width: 82px;
    height: 30px;
    padding: 0;
    margin: 0;
    opacity: 0;
    + button {
      font-size: 18px;
      line-height: 1;
      padding: 10px 20px;
      border: none;
      user-select: none;
      background-color: #eee;
      &:hover {
        background-color: lighter(#eee, .5);
      }
    }
  }
`;
