import styled from "styled-components";

export const ToggleWrapper = styled.div``;
export const ToggleItem = styled.div`
  display: inline-block;
  width: 50px;
  height: 17px;
  cursor: pointer;
  position: relative;
  background-color: grey;
  border-radius: 20px;
  ::before {
    content: "";
    display: block;
    width: 13px;
    height: 13px;
    left: 4px;
    bottom: 2px;
    position: absolute;
    background-color: white;
    transition: all 0.4s ease;
    border-radius: 20px;

  }
  &.check {
    background-color: grey;
    ::before {
      background-color: black;
      transform: translateX(30px);
    }
  }
`;
