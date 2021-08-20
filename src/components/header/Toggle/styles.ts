import styled from "styled-components";

export const ToggleWrapper = styled.div``;
export const ToggleItem = styled.div`
  display: inline-block;
  width: 50px;
  height: 17px;
  cursor: pointer;
  position: relative;
  background-color: #ccc;
  ::before {
    content: "";
    display: block;
    width: 13px;
    height: 13px;
    left: 4px;
    bottom: 4px;
    position: absolute;
    background-color: #fff;
    transition: all 0.4s ease;
  }
  &.check {
    background-color: #2196f3;
    ::before {
      background-color: white;
      transform: translateX(30px);
    }
  }
`;
