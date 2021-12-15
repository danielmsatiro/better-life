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
  line-height: 21px;
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
    padding: 5px 30px 5px 15px;
  }

  @media (min-width: 769px) {
    font-size: 0.8rem;
    border: none;
    border-radius: 5px;

    margin: 0 20px;

    div {
      height: 30px;
      border-radius: 10px 10px 0px 0px;
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

  border-radius: 0px 0px 0px 0px;
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
