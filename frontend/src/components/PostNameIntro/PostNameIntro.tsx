import React from 'react';
import * as S from './styles';

const PostNameIntro = (props: any) => {
    return (
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
    );
};
export default PostNameIntro;
