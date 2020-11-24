import styled, { css } from 'styled-components';

interface FormProps {
  Error: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  input,
  button {
    width: 339px;
    height: 56px;
    border-radius: 8px;
    border: none;
  }

  input {
    margin: 30px 0 20px;
    padding-left: 8px;
  }

  ${props =>
    props.Error &&
    css`
      color: #eb2d2d;
    `}

  > span {
    position: absolute;
    display: block;
    top: 46px;
    right: 8px;
  }

  button {
    background-color: #ffce00;
    font-weight: bold;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 8px;
    }

    transition: opacity 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }
`;
