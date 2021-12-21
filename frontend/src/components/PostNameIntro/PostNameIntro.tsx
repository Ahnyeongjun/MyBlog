import React from 'react';
import { themeDataState } from '../../features/theme/themeSlice';
import { useTypedSelector } from '../../module/store';
import * as S from './styles';

const PostNameIntro = (props: any) => {
    const { themeData } = useTypedSelector(themeDataState);

    return (
        <>
            {themeData != 'dark' ? (
                <S.PostNameIntro>
                    <S.MyInformationWrapper>
                        <S.Title>{props.tagName ? props.tagName : 'Post'}</S.Title>
                        {props.tagTotal && (
                            <S.TaggNameWrapper>
                                <S.TagName>{props.tagTotal}</S.TagName>
                            </S.TaggNameWrapper>
                        )}
                    </S.MyInformationWrapper>
                </S.PostNameIntro>
            ) : (
                <S.PostNameIntro className="check">
                    <S.MyInformationWrapper>
                        <S.Title>{props.tagName ? props.tagName : 'Post'}</S.Title>
                        {props.tagTotal && (
                            <S.TaggNameWrapper>
                                <S.TagName>{props.tagTotal}</S.TagName>
                            </S.TaggNameWrapper>
                        )}
                    </S.MyInformationWrapper>
                </S.PostNameIntro>
            )}
        </>
    );
};
export default PostNameIntro;
