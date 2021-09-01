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
                            <S.MainPostImg src={e.mainImageURL} />
                            <S.ContentWrapper>
                                <S.FeautredTitleWrapper>
                                    <S.FeautredTitle>{e.title}</S.FeautredTitle>
                                </S.FeautredTitleWrapper>
                                <S.FeautredContent>{e.mainContent}</S.FeautredContent>
                            </S.ContentWrapper>
                        </S.MainPostItemWrapper>
                    ))}
                </>
            ) : (
                <>
                    {' '}
                    {postData.map((e) => (
                        <S.MainPostItemWrapper>
                            <S.MainPostImg src={e.mainImageURL} />
                            <S.ContentWrapper>
                                <S.FeautredTitleWrapper>
                                    <S.FeautredTitle>{e.title}</S.FeautredTitle>
                                </S.FeautredTitleWrapper>
                                <S.FeautredContent>{e.mainContent}</S.FeautredContent>
                            </S.ContentWrapper>
                        </S.MainPostItemWrapper>
                    ))}
                </>
            )}
        </>
    );
};

export default Post;
