import styled from "styled-components";
export const AccordionWrapper = styled.div`
  display: flex;
  width: 80%;
  padding: 0px 10px;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Header = styled.a`
  padding-bottom: 3px;
  width: 100%;
  height: 20px;
  display: block;
  :hover {
    border-bottom: solid black 1px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ParentsContentsWrapper = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
`;

export const ChildContentsWrapper = styled.div`
  margin-top: 5px;
  height: auto;
  width: calc(100%);
`;

export const ContentWrapper = styled.div`
  height: 300px;
  width: 100%;
  display: block;
  overflow: hidden;
  background: rgb(240, 240, 240);
`;

export const Content = styled.a`
  margin-top: 20px;
  width: 100%;
  height: 150px;
  display: block;
`;

export const Img = styled.img`
  width: 100%;
  height: 150px;
`;
export const ItemWrapper = styled.div`
  padding: 5px 10px;
`;
