import styled from "styled-components";
import { Bounse, HoverPage } from "../../animation";

export const BtnWrapper = styled.ul`
  height: 60px;
  width: 150px;
  position: fixed;
  z-index: 100;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  margin: 15px 10px;
  @media only screen and (max-width: 1200px) {
    margin: 15px;
    flex-direction: row-reverse;
    justify-content: unset;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const BtnItemWrapper = styled.div<{ scroll: number; color: string }>`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  cursor: pointer;
  background: ${(props) => (props.scroll < 20 ? "rgba(28,27,55,1)" : "#2d2d2d")};
  color: ${(props) => props.color};
  &.check {
    background:#2d2d2d;
    border: solid white 1px;
  }
  :hover {
    animation: ${Bounse} 0.5s infinite;
  }
  :nth-child(2) {
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }
`;

export const Btn = styled.li`
  text-align: center;
  width: 100%;
`;
