import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 30px 40px;
  background-color: #fff;
  display: flex;
  justify-content: center;

  @media (min-width: 769px) {
    justify-content: flex-start;
  }
`;

export default Container;
