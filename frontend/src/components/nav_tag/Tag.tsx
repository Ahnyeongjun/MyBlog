import React, { useCallback, useMemo, useRef, useState } from 'react';
import { getTag, tagDateState } from '../../features/tag/tagSlice';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import * as S from './styles';
const Tag = (props: any) => {
    const dispatch = useAppDispatch();
    useMemo(() => {
        dispatch(getTag({}));
    }, []);

    const { tag } = useTypedSelector(tagDateState);

    return (
        <>
            {props.check ? (
                <S.TagWrapper>
                    {tag &&
                        tag.map((e) => (
                            <S.TagItemWrapper
                                onClick={() => {
                                    location.href = `/tag/${e.name}`;
                                }}
                            >
                                <S.TagItem>{e.name}</S.TagItem>
                                <S.TagCount> ({e.count})</S.TagCount>
                            </S.TagItemWrapper>
                        ))}
                </S.TagWrapper>
            ) : (
                <S.TagWrapper>
                    {tag &&
                        tag.map((e) => (
                            <S.TagItemWrapper
                                onClick={() => {
                                    location.href = `/tag/${e.name}`;
                                }}
                            >
                                <S.TagItem>{e.name}</S.TagItem>
                                <S.TagCount> ({e.count})</S.TagCount>
                            </S.TagItemWrapper>
                        ))}
                </S.TagWrapper>
            )}
        </>
    );
};

export default Tag;
