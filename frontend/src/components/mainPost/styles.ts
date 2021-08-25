import styled from "styled-components";
import { BoxShaodw, HoverPage, BoxShaodwWhite } from "../../animation";

export const FeautredTitle = styled.a`
  margin-top: 10px;
  grid-area: title;
  font-size: 25px;
  height: auto;
  text-align: center;
  display: block;
`;
export const FeautredTitleWrapper = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;
export const FeautredContent = styled.div`
  margin-top: 10px;
  height: 200px;
  font-size: 16px;
  grid-area: content;
`;
export const MainPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  padding-left: 2vw;
  background: white;
  &.check {
    background: black;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 0;
  }
`;
export const PageNationWrapper = styled.div`
  display: flex;
`;
export const SecularOneFont = styled.div`
  padding: 10px 10px;
  font-family: NotoSans !important;
  font-size: 35px;
`;
export const MainPostItemWrapper = styled.div`
  height: 600px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  background: rgb(240, 240, 240);
  &.check {
    color: white;
    background: grey;
    :hover {
      animation: ${BoxShaodwWhite} 0s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
  }
  :hover {
    cursor: pointer;
    animation: ${BoxShaodw} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    /* box-shadow: lavender 1px 3px; */
  }
`;
export const ContentWrapper = styled.div`
  padding: 10px 25px;
`;
export const MainPostImg = styled.img`
  width: 100%;
  height: 400px;
`;
export const PageFont = styled.a<{ isPost: boolean }>`
  display: block;
  text-align: center;
  height: 35px;
  width: 130px;
  padding: 10px;
  font-family: NotoSans !important;
  font-size: 28px;
  color: ${(props) => (props.isPost == true ? "black" : "grey")};
  border-bottom: ${(props) =>
    props.isPost == true ? " solid black 2px" : null};
  &.check {
    color: ${(props) => (props.isPost == true ? "white" : "rgb(60, 60, 60)")};
    border-bottom: ${(props) =>
      props.isPost == true ? " solid white 2px" : null};
  }
  :hover {
    animation: ${HoverPage} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    color: grey;
  }
`;
export const Nav = styled.nav`
  padding-left: 5%;
  width: 30%;
  padding-top: 120px;
  display: flex;
  height: auto;
  flex-direction: column;
`;