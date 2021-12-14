import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  .item {
    scroll-snap-align: center;
    flex: none;
    margin: 10px 0px;
  }
  @media (min-width: 769px) {
    overflow-x: visible;
    overflow-y: auto;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
