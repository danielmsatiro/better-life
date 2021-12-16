import styled from "styled-components";

export const GoalCardSideNav = styled.div`
  background: var(--opaque-dark-green);
  width: 250px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 15px;

  .double_check {
    width: 50px;
    height: 50px;
    color: white;
    margin-right: 10px;
  }

  .GoalCard_content {
    margin-left: 10px;
    padding: 10px 0px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h3 {
    margin: 0;
    font-family: "Ubuntu";
    color: white;
  }

  p {
    color: var(--opaque-light-green);
    font-size: 12px;
  }
  @media (min-width: 769px) {
    width: auto;
  }
`;
