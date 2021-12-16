import styled from "styled-components";

export const Container = styled.div`
  Input {
    width: 100%;
    height: 30px;
    background-color: var(--light-gray);
    padding: 0;
  }

  Select {
    height: 30px;
    background-color: var(--light-gray);
    text-align: center;
  }

  p {
    height: auto;
    margin: 10px 0;
  }

  .quantificador {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      width: 50px;
      height: 30px;
      text-align: center;
      font-weight: bold;
    }
    Button {
      width: 50px;
      height: 30px;
      margin: 0;
      padding: 0;
      border-radius: 3px;
      &.btnMinus {
        background: var(--error);
      }
      &.btnPlus {
        background: var(--success);
      }
    }
  }
`;
