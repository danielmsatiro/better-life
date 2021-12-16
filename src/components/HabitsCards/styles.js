import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #73e5e2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  overflow: auto;

  table {
    border-collapse: collapse;
  }

  div {
    background: #1f161e;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 769px) {
    font-size: 0.8rem;
    border: none;
    border-radius: 5px;

    margin: 0 20px;

    div {
      height: 30px;
    }
  }

  @media (min-width: 1280px) {
    width: 520px;
  }
`;

export const Content = styled.tbody`
  display: flex;
  flex-direction: column;

  height: 150px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
    background-color: var(--green);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--light-green);
    border-radius: 5px;
  }

  border-radius: 0px;
  tr {
    border-radius: 0px;
    display: flex;
    flex-direction: row;
  }
  tr:nth-child(even) {
    background-color: #55b79d;
  }
  td {
    flex: 1;
    padding: 5px;
    margin: 5px;
    text-align: center;
  }
  .button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
  }
  #title {
    flex-grow: 4;
    text-align: left;
  }

  @media (min-width: 769px) {
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

  .titulo {
    width: 70%;
    padding-left: 30px;
    h3 {
      margin: 0;
    }
  }

  .holder {
    width: 30%;
    padding-right: 30px;
    display: flex;
    justify-content: flex-end;
  }

  Button {
    height: 20px;
    margin: 0;
    padding: 0;
    border-radius: 3px;

    &.opener {
      width: 20px;
    }
  }
`;
