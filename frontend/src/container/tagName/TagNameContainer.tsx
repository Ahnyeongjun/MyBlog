import React from 'react';
import * as S from './styles';

const TagNameContainer = (props: any) => {
    return (
        <S.TagNameWrapper>
            <S.MyInformationWrapper>
                <S.TagTitle>Tag/{props.tagName}</S.TagTitle>
                <S.TaggNameWrapper>
                    <S.TagName>#{props.tagTotal}개의 게시물</S.TagName>
                </S.TaggNameWrapper>
            </S.MyInformationWrapper>
        </S.TagNameWrapper>
    );
};
export default TagNameContainer;
