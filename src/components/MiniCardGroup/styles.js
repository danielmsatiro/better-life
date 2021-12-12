import styled from "styled-components";

export const Container = styled.div`
  width: 270px;
  height: 216px;
  background: var(--dark-purple);
  border-radius: 14px;
  color: white;
  line-height: 1.5;
  h3,
  h4,
  h5 {
    margin: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background: var(--green);
  border-radius: 14px 14px 0px 0px;
  color: black;
  font-size: 24px;
  padding: 0 10px 0 10px;
  h3 {
    margin-left: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Box = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px 0 20px;
`;

export const Content = styled.div``;

export const SubContent1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-size: 18px;
    color: var(--green);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  span {
    font-size: 12px;
    color: var(--error);
    cursor: pointer;
    white-space: nowrap;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const SubContent2 = styled.div`
  h5 {
    font-size: 14px;
  }
  p {
    font-size: 12px;
    max-height: 88px;
    overflow: hidden;
    display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical; 
`;

export const Footer = styled.div`
  font-size: 12px;
  color: var(--green);
  display: flex;
  justify-content: space-between;
`;
