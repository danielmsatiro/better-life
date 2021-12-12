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
    position: absolute;
    left: 70%;
    width: 200px;

    color: black;

    background-color: var(--light-green);
    border-radius: 10px;

    h2,
    h4 {
      font-size: 15px;
    }
    h4 {
      white-space: pre-wrap;
    }
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
