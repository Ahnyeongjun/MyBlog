import { TagType } from "components/type/Tag";
import React, { useCallback, useRef, useState } from "react";
import * as S from "./styles";
const Tag = (props: TagType) => {
  return (
    <S.TagWrapper>
      <S.TagItemWrapper>
        <S.TagItem>
          {props.tagName} ({props.tagCount})
        </S.TagItem>
      </S.TagItemWrapper>
    </S.TagWrapper>
  );
};

export default Tag;
