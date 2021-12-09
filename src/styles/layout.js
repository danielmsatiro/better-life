import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    header {
      justify-content: flex-start;
      padding-left: 2em;
    }
  }
`;
