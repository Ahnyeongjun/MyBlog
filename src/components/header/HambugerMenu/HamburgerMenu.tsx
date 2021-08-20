import React, { useState } from "react";
import * as S from "./styles";

const HamburgerMenu = (props: any) => {
  const [isOpen, SetIsOpen] = useState(false);

  const UpdateIsOpen = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <S.HambugerWrapper onClick={UpdateIsOpen}>
        {isOpen == true ? (
          <S.OpenWrapper>
            <S.Habuger_line className="active"></S.Habuger_line>
            <S.Menu scroll={props.scrollPosition} className="active">
              <S.Menu_Item>Menu_Item</S.Menu_Item>
              <S.Menu_Item>Menu_Item</S.Menu_Item>
              <S.Menu_Item>Menu_Item</S.Menu_Item>
              <S.Menu_Item>Menu_Item</S.Menu_Item>
            </S.Menu>
          </S.OpenWrapper>
        ) : (
          <S.CloseWrapper>
            <S.Habuger_line></S.Habuger_line>
          </S.CloseWrapper>
        )}
      </S.HambugerWrapper>
    </>
  );
};

export default HamburgerMenu;
