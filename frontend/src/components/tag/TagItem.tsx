import React, { useCallback, useEffect, useRef, useState } from 'react';
import { removeTag } from '../../features/editor/editorSlice';
import { useAppDispatch } from '../../module/store';

import * as S from './styles';

const TagItem = (props: any) => {
    return (
        <>
            <S.TagItemWrapper onClick={props.onClick}>
                <S.TagItem>{props.tag}</S.TagItem>
            </S.TagItemWrapper>
        </>
    );
};
export default TagItem;
