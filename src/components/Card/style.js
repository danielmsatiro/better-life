import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: auto;
  margin: auto;
  background-color: white;
  .card-form {
    border-radius: 0;
    width: 320px;
    box-shadow: none;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 30px;
  background: black;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .action {
    width: 60%;
    padding-left: 15px;
  }

  .button-holder {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
  }

  Button {
    height: 20px;
    margin: 0;
    padding: 0;
    border-radius: 3px;
    &.exec {
      width: 60px;
    }
    &.delete {
      width: 20px;
    }
  }
`;
