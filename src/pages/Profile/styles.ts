import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      position: absolute;
      width: 115px;
      height: 115px;
      border-radius: 50%;
      top: 65px;
    }
  }

  @media (min-width: 900px) {
    max-width: 900px;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
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
    margin: 0 auto;
  }
`;

export const Info = styled.section`
  margin-bottom: 30px;

  main {
    display: flex;

    > div {
      height: 42px;
      width: 10px;
      margin-right: 5px;
      background-color: #ffce00;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  span {
    margin-left: 15px;
    display: block;
  }

  @media (min-width: 900px) {
    main {
      margin-top: 50px;
    }
  }
`;

export const InfoNumbers = styled.section`
  display: flex;
  background-color: #5252525d;
  padding: 10px 0;

  > a {
    color: #fff;
    text-decoration: none;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 36px;
    }

    transition: color 0.3s;
    &:hover {
      color: #ffce00;
    }
  }
`;

export const Bio = styled.section`
  margin: 30px 0;
  display: flex;
  flex-direction: column;

  main {
    display: flex;

    > div {
      height: 42px;
      width: 10px;
      margin-right: 5px;
      background-color: #ffce00;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  p {
    margin-left: 15px;
  }
`;
