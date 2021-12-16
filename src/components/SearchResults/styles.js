import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Results = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 70vh;
  border-radius: 0 0 0px 15px;
  background-color: var(--light-green);
  box-shadow: var(--box-shadow);
  margin: 0 auto;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--green);
    border-radius: 5px;
  }

  @media (min-width: 769px) {
    width: 90%;
  }

  @media (min-width: 1280px) {
    width: 95%;
  }
`;

const BlackBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  padding: 10px 15px;
  border-radius: 15px 15px 0px 0px;
  font-size: 1rem;
  font-weight: 900;

  background-color: var(--dark-purple);
  color: var(--white);

  @media (min-width: 769px) {
  }

  @media (min-width: 1280px) {
    width: 95%;
  }
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background-color: var(--purple);
  color: var(--white);

  &&:hover {
    transition: 0.3s;
    background-color: var(--light-purple);
    color: var(--dark-purple);
    cursor: pointer;
  }
`;

const Content = styled.div`
  margin: 10px 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

const GroupContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 90%;

  max-width: 350px;
  margin: 10px 0;

  border-radius: 15px;
  background-color: var(--white);

  header {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 0;
    border-radius: 15px 15px 0px 0px;
    background-color: var(--dark-purple);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h3 {
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
    height: 19px;
    margin: 0;
    padding: 0 10px;

    font-size: 1rem;
    text-align: left;
    color: var(--white);
  }

  h4 {
    margin: 0;
    padding: 5px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--purple);
    color: var(--white);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    width: auto;
    color: var(--purple);
    text-decoration: underline;
  }

  button {
    width: auto;
    margin: 5px 0 10px 0;
    padding: 8px;
    border: none;
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    align-self: center;
    font-family: "Ubuntu", sans-serif;
    font-weight: 900;
    font-size: 0.9rem;
    color: var(--white);
  }

  button:hover {
    transition: 0.3s;
    filter: brightness(0.9);
  }

  button:not(:hover) {
    transition: 0.3s;
  }

  @media (min-width: 769px) {
    button {
      cursor: pointer;
    }
  }
`;

const SubSpan = styled.span`
  display: flex;
  align-items: center;
  margin: 0 10px;
  padding: 2px;
  border-radius: 5px;
  font-family: monospace;
  font-size: 0.8rem;
  font-weight: 900;
  background-color: var(--white);
  color: var(--success);
`;

const GroupInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 5px;
  padding: 5px 10px;
  background-color: var(--white);

  span {
    font-size: 1.1rem;
    font-weight: 900;
  }
`;

const GroupDescription = styled.div`
  margin: 5px 0;
  max-width: 200px;
  --webkit-line-clamp: 3;
  --webkit-box-orient: vertical;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const GroupCategory = styled.div`
  padding: 2px;
  font-weight: 900;
  background-color: var(--purple);
  color: var(--white);
`;

const SubscribingNest = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaginationNest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  span {
    height: 20px;
    padding: 0 10px;
    background-color: var(--white);
  }

  button {
    width: 20px;
    height: 20px;
    border: none;
    font-weight: 900;
    background-color: var(--purple);
    color: var(--white);
  }

  button:hover {
    transition: 0.3s;
    background-color: var(--light-purple);
    color: var(--dark-purple);
  }

  @media (min-width: 769px) {
    button {
      cursor: pointer;
    }
  }
`;

const ButtonNext = styled.button`
  border-radius: 5px 0 0 5px;
`;

const ButtonPrev = styled.button`
  border-radius: 0 5px 5px 0;
`;

const NotFinded = styled.div`
  margin-top: 20px;

  p {
    padding: 5px;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 500;
    background-color: var(--white);
    box-shadow: var(--box-shadow);
  }

  span {
    font-style: italic;
  }
`;

export {
  Container,
  Results,
  BlackBar,
  Button,
  ButtonNext,
  ButtonPrev,
  Content,
  GroupContainer,
  SubSpan,
  GroupCategory,
  GroupDescription,
  GroupInfo,
  SubscribingNest,
  PaginationNest,
  NotFinded,
};
