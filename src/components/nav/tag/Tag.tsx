import { TagType } from "components/type/Tag";
import React, { useCallback, useRef, useState } from "react";
import * as S from "./styles";
const Tag = (props: any) => {
  return (
    <S.TagWrapper>
      <S.TagItemWrapper>
        <S.TagItem className="check">
          {props.tagName} ({props.tagCount} )
        </S.TagItem>
      </S.TagItemWrapper>
    </S.TagWrapper>
  );
};

export default Tag;
