import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 126px;
  position: relative;

  display: flex;
  justify-content: space-between;

  margin-bottom: 70px;
  padding: 15px;
  background-color: #1f1f1f;

  span {
    display: block;
  }

  > a {
    display: flex;
    height: min-content;
    align-items: center;
    color: #fff;
    text-decoration: none;

    svg {
      margin-left: 5px;
    }

    transition: opacity 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: 900px) {
    max-width: 900px;
  }
`;
