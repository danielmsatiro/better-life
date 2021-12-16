import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  max-height: 460px;
  background: var(--dark-purple);
  color: white;
  border-radius: 10px;
  padding: 10px;
  margin-right: 20px;
  .encabezado {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      width: auto;
      height: 50px;
    }
  }
  ul {
    overflow: auto;
    max-height: 390px;
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--light-green);
      border-radius: 5px;
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
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .email {
        height: 50%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
`;
