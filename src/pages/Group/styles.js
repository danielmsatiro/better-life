import styled from "styled-components";

const Layout = styled.div`
  margin-bottom: 20px;
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  @media (min-width: 769px) {
    position: relative;
    display: flex;
    background-color: var(--white);
    width: 740px;
    height: 630px;

    border-radius: 0 0 15px 15px;
  }

  @media (min-width: 1280px) {
    width: 1100px;
    height: 560px;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  @media (min-width: 769px) {
    padding-bottom: 20px;
    .result_group {
      height: 490px;
    }
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--green);
      border-radius: 5px;
    }
  }

  @media (min-width: 1280px) {
    width: 960px;
    height: 100%;
    overflow: hidden;

    .result_group {
      height: 420px;
    }
  }
`;

const Aside = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
  }
  @media (min-width: 1280px) {
    height: 480px;
    margin-bottom: 0;
  }
`;

const GoalActivitie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    width: 100%;
    margin: 0 20px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    width: 500px;
    margin: 0;
  }
`;

const Header = styled.div`
  @media (min-width: 769px) {
    width: 740px;
    height: 3.5vh;
    border-radius: 15px 15px 0 0;
    background-color: var(--green);
  }

  @media (min-width: 1280px) {
    width: 1100px;
  }
`;

const InfoContainer = styled.div`
  margin: 0px 20px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 769px) {
    margin: 0px 10px;
  }

  p {
    margin-top: 10px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 500px;
    max-height: 250px;
    overflow: auto;
    overflow-x: hidden;
    margin-bottom: 0;

    p {
      text-align: left;
      word-break: break-all;
    }
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--green);
    border-radius: 5px;
  }
`;

const TextContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  p {
  }
  @media (min-width: 769px) {
    max-width: 500px;
  }
`;

const Footer = styled.div`
  @media (min-width: 769px) {
  }

  @media (min-width: 1280px) {
  }
`;

const A = styled.div`
  height: 10px;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Solver = styled.div`
  @media (min-width: 769px) {
    margin-right: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: auto;
    height: 100%;

    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--dark-purple);
      border-radius: 5px;
    }
  }

  @media (min-width: 1280px) {
    height: 100%;
    flex-direction: row;
    align-items: flex-start;
    overflow: hidden;
  }
`;

export {
  Layout,
  Container,
  Main,
  Aside,
  GoalActivitie,
  Header,
  InfoContainer,
  TextContainer,
  Footer,
  A,
  Solver,
};
