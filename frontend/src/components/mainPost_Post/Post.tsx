import React, { useEffect, useMemo, useState } from 'react';
import { editorState, getPagenationPost } from '../../features/editor/editorSlice';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import * as S from '../../container/mainPost/styles';
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

    const onClick = (searchUrl: string) => {
        location.href = `/post/${searchUrl}`;
    };

    return (
        <>
            {props.check ? (
                <>
                    {postData &&
                        postData.map((e) => (
                            <S.MainPostItemWrapper className="check" onClick={() => onClick(e.searchUrl)}>
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
                    {postData &&
                        postData.map((e) => (
                            <S.MainPostItemWrapper onClick={() => onClick(e.searchUrl)}>
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
