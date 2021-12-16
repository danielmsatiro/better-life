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
  text-align: center;

  @media (min-width: 769px) {
    padding-bottom: 20px;
  }

  @media (min-width: 1280px) {
    width: 960px;
    height: 500px;
  }
`;

const Aside = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 1280px) {
  }
`;

const GoalActivitie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    margin: 0 20px;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    width: 500px;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 250px;

  @media (min-width: 769px) {
    margin: 0px 10px;
    width: 300px;
    margin: 20px 20px;
  }

  p {
    margin-top: 10px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    width: 490px;
    height: 200px;
    margin-left: 50px;
  }
`;

const TextContainer = styled.div`
  @media (min-width: 769px) {
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
    display: flex;
    align-items: flex-start;
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
