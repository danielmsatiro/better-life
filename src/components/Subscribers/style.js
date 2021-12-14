import styled from "styled-components";

export const Container = styled.ul`
  width: 320px;
  background: var(--dark-purple);
  color: white;
  border-radius: 10px;
  padding: 10px;
  .encabezado {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      width: auto;
      height: 50px;
    }
  }
  .subscribers {
    background: var(--green);
    margin: 15px 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    .ico {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: auto;
        height: 90%;
      }
    }
    .info {
      width: 70%;
      height: 100%;
      .user {
        margin-top: 5px;
        height: 50%;
        font-size: 24px;
        font-weight: bold;
      }
      .email {
        height: 50%;
      }
    }
  }
`;
