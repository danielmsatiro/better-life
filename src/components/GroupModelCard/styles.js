import styled from "styled-components";

export const GoalCardContainer = styled.section`
  background: var(--dark-purple);
  width: 240px;
  height: 115px;
  margin: 10px auto;
  border-radius: 14px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  .GoalCard_header {
    display: flex;
    justify-content: space-between;
  }

  .GoalCard_header_title {
    display: flex;
    align-items: center;
  }

  .GoalCard_header_title h4 {
    color: white;
    margin: 0 10px;
  }

  .GoalCard_header_title_edit {
    color: white;
    cursor: pointer;
  }

  .GoalCard_header_title_check {
    color: green;
    cursor: pointer;
  }

  .GoalCard_header_delete {
    color: tomato;
    cursor: pointer;
    margin-right: 30px;
  }

  .GoalCard_content {
    margin-top: 15px;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .GoalCard_content p {
    color: white;
    font-size: 12px;
    font-family: "Ubuntu";
    font-weight: light;
  }

  .GoalCard_content_data {
  }

  .GoalCard_content_data p {
    color: var(--green);
  }

  @media (min-width: 769px) {
    width: 180px;
  }
`;
