import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 769px) {
    .icon:hover {
      cursor: pointer;
    }
  }
`;

export const Info = styled.div`
  margin: 0 30px;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 25px;
  }
  p {
    margin-top: 10px;
  }

  @media (min-width: 769px) {
    margin-bottom: 10px;
    margin: 0 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  padding-left: 10px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-purple);
    border-radius: 5px;
  }

  .item {
    scroll-snap-align: center;
    flex: none;
    margin: 10px 0px;
  }

  @media (min-width: 769px) {
    height: 360px;
    width: 280px;
    padding-left: 0;
    overflow-x: hidden;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    width: 600px;
    height: 320px;
  }
`;
