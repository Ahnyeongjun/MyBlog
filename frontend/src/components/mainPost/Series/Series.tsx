import React, { useMemo, useState } from 'react';
import { editorState, getPost } from '../../../features/editor/editorSlice';
import { useAppDispatch, useTypedSelector } from '../../../module/store';
import * as S from '../styles';
const Series = () => {
    const dispatch = useAppDispatch();

    useMemo(() => {
        dispatch(getPost({ page: 1, pageSize: 3 }));
    }, []);

    const { postData } = useTypedSelector(editorState);
    return (
        <>
            <div>개발중</div>
            {/* {postData.map((e) => (
                <S.MainPostItemWrapper>
                    <S.MainPostImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                    <S.ContentWrapper>
                        <S.FeautredTitleWrapper>
                            <S.FeautredTitle>{e.title}</S.FeautredTitle>
                        </S.FeautredTitleWrapper>
                        <S.FeautredContent>{e.text}</S.FeautredContent>
                    </S.ContentWrapper>
                </S.MainPostItemWrapper>
            ))} */}
        </>
    );
};

export default Series;
