import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 900px) {
    max-width: 900px;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
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

export const CardRepo = styled.section`
  margin: 30px 0;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #7070705a;

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
    padding-left: 15px;
    padding-right: 50px;
  }
`;

export const AdditionalInfo = styled.div`
  margin-top: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;

  .stars {
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }

  .lock {
    margin-right: 15px;

    > svg {
      margin-right: 5px;
    }
  }
`;
