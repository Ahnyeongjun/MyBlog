import React, { useCallback, useRef, useState } from "react";
import * as S from "./styles";
const Accordion = (props:any) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const handleButtonClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "white";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  return (
    <>{props.check ?    <S.AccordionWrapper>
      <S.ItemWrapper>
        <S.HeaderWrapper>
          <S.Header onClick={handleButtonClick } className = "check">아코디언</S.Header>
        </S.HeaderWrapper>
        <S.ParentsContentsWrapper ref={parentRef}>
          <S.ChildContentsWrapper ref={childRef}>
            <S.ContentWrapper>
              <S.Img src="http://picsum.photos/id/1/500/300" />
              <S.Content>
                왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
                왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
                왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
              </S.Content>
            </S.ContentWrapper>
          </S.ChildContentsWrapper>
        </S.ParentsContentsWrapper>
      </S.ItemWrapper>{" "}
    </S.AccordionWrapper>:    <S.AccordionWrapper>
      <S.ItemWrapper>
        <S.HeaderWrapper>
          <S.Header onClick={handleButtonClick }>아코디언</S.Header>
        </S.HeaderWrapper>
        <S.ParentsContentsWrapper ref={parentRef}>
          <S.ChildContentsWrapper ref={childRef}>
            <S.ContentWrapper>
              <S.Img src="http://picsum.photos/id/1/500/300" />
              <S.Content>
                왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
                왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
                왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
              </S.Content>
            </S.ContentWrapper>
          </S.ChildContentsWrapper>
        </S.ParentsContentsWrapper>
      </S.ItemWrapper>{" "}
    </S.AccordionWrapper>}</>
 
  );
};

export default Accordion;
