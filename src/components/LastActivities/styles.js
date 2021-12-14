import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-purple);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  text-align: center;
  h2 {
    font-size: 16px;
  }
  h4 {
    font-weight: normal;
    font-size: 12px;
    margin: 0px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 20px;
  }

  @media (min-width: 769px) {
    height: 300px;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    left: 70.1%;
    top: 13%;
    width: 200px;
    color: var(--dark-purple);

    background-color: var(--light-green);
    border-radius: 10px 0 0 10px;

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--green);
      border-radius: 5px;
    }

    h2,
    h4 {
      font-size: 15px;
    }
    h4 {
      white-space: pre-wrap;
    }
  }

  @media (min-width: 1280px) {
    left: 77%;
    top: 15.5%;

    height: 400px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (min-width: 769px) {
    flex-direction: column;
  }
`;
