import React, { useEffect, useMemo, useState } from 'react';
import { editorState, getPagenationPost } from '../../../features/editor/editorSlice';
import { useAppDispatch, useTypedSelector } from '../../../module/store';
import * as S from '../styles';
const Post = (props: any) => {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    useEffect(() => {
        if (props.scrollPosition >= 4800 * page) {
            setPage(page + 1);
            dispatch(getPagenationPost({ page: page + 1, pageSize: 8, type: 'main' }));
        }
    });

    useMemo(() => {
        dispatch(getPagenationPost({ page: page, pageSize: 8, type: 'main' }));
    }, []);

    const { postData } = useTypedSelector(editorState);
    return (
        <>
            {props.check ? (
                <>
                    {' '}
                    {postData.map((e) => (
                        <S.MainPostItemWrapper className="check">
                            <S.MainPostImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                            <S.ContentWrapper>
                                <S.FeautredTitleWrapper>
                                    <S.FeautredTitle>{e.title}</S.FeautredTitle>
                                </S.FeautredTitleWrapper>
                                <S.FeautredContent>{e.text}</S.FeautredContent>
                            </S.ContentWrapper>
                        </S.MainPostItemWrapper>
                    ))}
                </>
            ) : (
                <>
                    {' '}
                    {postData.map((e) => (
                        <S.MainPostItemWrapper>
                            <S.MainPostImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                            <S.ContentWrapper>
                                <S.FeautredTitleWrapper>
                                    <S.FeautredTitle>{e.title}</S.FeautredTitle>
                                </S.FeautredTitleWrapper>
                                <S.FeautredContent>{e.text}</S.FeautredContent>
                            </S.ContentWrapper>
                        </S.MainPostItemWrapper>
                    ))}
                </>
            )}
        </>
    );
};

export default Post;
