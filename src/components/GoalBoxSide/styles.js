import styled from "styled-components";

export const GoalBoxSideNav = styled.section`
  background: var(--dark-purple);
  width: 270px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px 5px 10px 5px;
  margin: 0 auto;
  margin-top: 10px;

  .GoalBox_title {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 250px;

    margin-bottom: 20px;
  }

  .icon_goal_title {
    width: 60px;
    height: 30px;
  }

  @media (min-width: 769px) {
    margin-top: 0;
    width: 220px;
    height: 440px;

    h2 {
      font-size: 1rem;
    }
  }

  @media (min-width: 1280px) {
    width: 270px;
    height: 375px;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const GoalsCardBox = styled.div`
  overflow: auto;
  padding: 0 5px;
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--white);
    border-radius: 5px;
  }
`;
