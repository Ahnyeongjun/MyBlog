import styled from "styled-components";

export const Header = styled.header<{ scroll: number }>`
  grid-area: header;
  //sticky 헤더 고정
  position: sticky;
  top: 0;
  display: flex;
  background: ${(props) => (props.scroll < 20 ? "#1c1b37" : "black")};
  justify-content: space-between;
  z-index: 100;
  &.check {
    border: ${(props) => (props.scroll < 20 ? null : "solid white 1px")};
  }
  @media only screen and (max-width: 800px) {
    width: 100vw;
  }
`;
export const Tech_Link = styled.a`
  padding: 21px 0 0 30px;
  width: 200px;
  height: 18px;
  color: white;
  font-size: 18px;
`;

export const Tech_Category = styled.ul`
  margin-right: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  @media only screen and (max-width: 1200px) {
    width: 400px;
    margin-right: 60px;
  }
  @media only screen and (max-width: 1000px) {
    width: 350px;
    margin-right: 40px;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const Category_item = styled.li`
  width: auto;
  color: white;
`;
