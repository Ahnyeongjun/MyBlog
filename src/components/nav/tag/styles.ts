import styled from "styled-components";

export const TagWrapper = styled.div`
  width: 85%;
  padding: 5px 20px;
  height: auto;
  display: flex;
`;
export const TagItemWrapper = styled.div`
  height: 20px;
  width: 100%;
`;
export const TagItem = styled.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
  :hover {
    border-bottom: solid black 1px;
  }
  &.check{
    :hover{
      border-bottom: solid white 1px;
    }
  }
`;
