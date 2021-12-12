import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #73e5e2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  overflow: auto;

  div {
    background: #1f161e;
    border-radius: 10px 10px 0px 0px;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 30px 5px 15px;
  }

  @media (min-width: 769px) {
    font-size: 0.8rem;

    div {
      height: 30px;
    }
  }
`;

export const Content = styled.table`
  display: flex;
  flex-direction: column;

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
`;
