import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import * as S from '../../container/mainPost/styles';
import { getPagenationMainPostList, postListDateState } from '../../features/postList/postListSlice';
const Post = (props: any) => {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    useEffect(() => {
        if (props.scrollPosition >= 4800 * page) {
            setPage(page + 1);
            dispatch(getPagenationMainPostList({ page: page + 1, pageSize: 8, type: 'main' }));
        }
    });

    useMemo(() => {
        dispatch(getPagenationMainPostList({ page: page, pageSize: 8, type: 'main' }));
    }, []);

    const onClick = (searchUrl: string) => {
        location.href = `/post/${searchUrl}`;
    };
    const { MainPostList } = useTypedSelector(postListDateState);

    return (
        <>
            {props.check ? (
                <>
                    {MainPostList &&
                        MainPostList.map((e) => (
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
                    {MainPostList &&
                        MainPostList.map((e) => (
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
