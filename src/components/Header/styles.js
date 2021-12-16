import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px 40px;
  background-color: var(--light-purple);

  @media (min-width: 769px) {
    justify-content: flex-start;
    background-color: var(--white);
  }
`;

export default Container;
