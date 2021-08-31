import React, { useCallback, useEffect, useRef, useState } from 'react';
import { editorState, updateTitle } from '../../features/editor/editorSlice';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import * as S from './styles';

const Title = (props: any) => {
    const ref = useRef<HTMLTextAreaElement>(null);
    const { title, text } = useTypedSelector(editorState);
    const dispatch = useAppDispatch();

    const handleResizeHeight = useCallback((e) => {
        if (ref === null || ref.current === null) {
            return;
        }
        ref.current.style.height = '70px';
        ref.current.style.height = ref.current.scrollHeight + 'px';

        const { value } = e.target;
        dispatch(updateTitle({ title: value }));
    }, []);

    return (
        <>
            <S.Title >
                <S.Input placeholder="제목을 입력해주세요" rows={1} ref={ref} onChange={handleResizeHeight} value={title} />
                <S.underLine />
            </S.Title>
        </>
    );
};
export default Title;
