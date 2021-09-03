import React from 'react';
import * as S from './styles';

const TagNameContainer = (props: any) => {
    return (
        <S.TagNameWrapper>
            <S.MyInformationWrapper>
                <S.TagTitle>{props.tagName}</S.TagTitle>
                <S.TaggNameWrapper>
                    <S.TagName>{props.tagTotal}</S.TagName>
                </S.TaggNameWrapper>
            </S.MyInformationWrapper>
        </S.TagNameWrapper>
    );
};
export default TagNameContainer;
