import styled from "styled-components";

const Layout = styled.div`
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
    border-radius: 0 0 15px 15px;
  }
`;

const Main = styled.div`
  @media (min-width: 769px) {
    width: 340px;
    padding: 20px;
  }
`;

const Aside = styled.div`
  @media (min-width: 769px) {
  }
`;

const Header = styled.div`
  @media (min-width: 769px) {
    width: 740px;
    height: 3.5vh;
    border-radius: 15px 15px 0 0;
    background-color: var(--green);
  }
`;

export { Layout, Container, Main, Aside, Header };
