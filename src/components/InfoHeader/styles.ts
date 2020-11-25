import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 68px;
  background-color: #1f1f1f;
  font-weight: bold;
  position: relative;

  a {
    color: #fff;
    display: flex;
    align-items: center;

    > svg {
      position: absolute;
      left: 10px;
    }

    transition: opacity 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }
`;
