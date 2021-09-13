import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import * as S from '../../container/mainPost/styles';
import { getPagenationMainPostList, postListDateState, searchTagOnPageList } from '../../features/postList/postListSlice';
const Post = (props: any) => {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    useEffect(() => {
        if (props.scrollPosition >= 4800 * page) {
            setPage(page + 1);
            if (props.tagName) {
                dispatch(
                    searchTagOnPageList({ page: page + 1, pageSize: 8, tagName: props.tagName, type: 'searchTag', total: props.tagTotal })
                );
            } else {
                dispatch(getPagenationMainPostList({ page: page + 1, pageSize: 8, type: 'main' }));
            }
        }
    });

    useMemo(() => {
        console.log(props.tagName);
        if (props.tagName) {
            dispatch(searchTagOnPageList({ page: page, pageSize: 8, tagName: props.tagName, type: 'searchTag', total: props.tagTotal }));
        } else {
            dispatch(getPagenationMainPostList({ page: page, pageSize: 8, type: 'main' }));
        }
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
                                {e.mainImageURL ? <S.MainPostImg src={e.mainImageURL} /> : null}
                                <S.ContentWrapper>
                                    <S.FeautredTitle>{e.title}</S.FeautredTitle>
                                    <S.FeautredContent>{e.mainContent}</S.FeautredContent>
                                    <S.TagList>
                                        {e.tag &&
                                            e.tag.map((e) => (
                                                <S.TagItem
                                                    onClick={() => {
                                                        location.href = `/tag/${e.name}`;
                                                    }}
                                                >
                                                    {e.name}
                                                </S.TagItem>
                                            ))}
                                    </S.TagList>
                                    <S.createdAt>{e.createdAt}</S.createdAt>
                                </S.ContentWrapper>
                            </S.MainPostItemWrapper>
                        ))}
                </>
            ) : (
                <>
                    {MainPostList &&
                        MainPostList.map((e) => (
                            <S.MainPostItemWrapper onClick={() => onClick(e.searchUrl)}>
                                {e.mainImageURL ? <S.MainPostImg src={e.mainImageURL} /> : null}
                                <S.ContentWrapper>
                                    <S.FeautredTitle>{e.title}</S.FeautredTitle>
                                    <S.FeautredContent>{e.mainContent}</S.FeautredContent>
                                    <S.TagList>
                                        {e.tag &&
                                            e.tag.map((e) => (
                                                <S.TagItem
                                                    onClick={() => {
                                                        location.href = `/tag/${e.name}`;
                                                    }}
                                                >
                                                    {e.name}
                                                </S.TagItem>
                                            ))}
                                    </S.TagList>
                                    <S.createdAt>작성 날짜: {e.createdAt}</S.createdAt>
                                </S.ContentWrapper>
                            </S.MainPostItemWrapper>
                        ))}
                </>
            )}
        </>
    );
};

export default Post;
