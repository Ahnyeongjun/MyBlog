import React from "react";
import HamburgerMenu from "./HambugerMenu/HamburgerMenu";
import * as S from "./styles";
import Toggle from "./Toggle/Toggle";
const HeaderContainer = (props: any) => {
  return (
    <>
      {props.check ? (
        <S.Header className="check" scroll={props.scrollPosition}>
          <S.Tech_Link>HappyGuy's BLOG</S.Tech_Link>
          <Toggle />
          {/* <S.Tech_Category>
      <S.Category_item>Project</S.Category_item>
      <S.Category_item>Post</S.Category_item>
      <S.Category_item>Resume</S.Category_item>
      <S.Category_item>Portfolio</S.Category_item>
    </S.Tech_Category> */}
          <HamburgerMenu scrollPosition={props.scrollPosition} />
        </S.Header>
      ) : (
        <S.Header scroll={props.scrollPosition}>
          <S.Tech_Link>HappyGuy's BLOG</S.Tech_Link>
          <Toggle />
          {/* <S.Tech_Category>
        <S.Category_item>Project</S.Category_item>
        <S.Category_item>Post</S.Category_item>
        <S.Category_item>Resume</S.Category_item>
        <S.Category_item>Portfolio</S.Category_item>
      </S.Tech_Category> */}
          <HamburgerMenu scrollPosition={props.scrollPosition} />
        </S.Header>
      )}
    </>
  );
};
export default HeaderContainer;
