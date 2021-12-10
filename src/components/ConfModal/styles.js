import styled from "styled-components";

const Container = styled.div`
  width: 350px;

  p {
    width: 300px;
    text-align: center;
  }
`;

const BlackBar1 = styled.div`
  padding: 20px;
  background-color: var(--dark-purple);
  border-radius: 10px 10px 0 0;
`;

const BlackBar2 = styled.div`
  padding: 20px;
  background-color: var(--dark-purple);
  border-radius: 10px 10px 0 0;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 30px;
  font-size: 1.5rem;
  font-weight: 900;
`;

const ButtonsNest = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const Button1 = styled.button`
  width: 90px;
  padding: 5px;
  border: none;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  background-color: #7879f1;

  &:hover {
    transition: 0.3s;
    background-color: #a5a6f6;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;

const Button2 = styled.button`
  width: 90px;
  padding: 5px;
  border: none;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  background-color: #55b79d;

  &:hover {
    transition: 0.3s;
    background-color: #73e5e2;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;

export {
  Container,
  BlackBar1,
  BlackBar2,
  MainContent,
  ButtonsNest,
  Button1,
  Button2,
};
