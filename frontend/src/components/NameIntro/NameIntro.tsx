import React from 'react';
import * as S from './styles';

const NameIntro = (props: any) => {
    return (
        <S.NameWrapper>
            <S.MyInformationWrapper>
                <S.TagTitle>{props.tagName}</S.TagTitle>
                {props.tagTotal && (
                    <S.TaggNameWrapper>
                        <S.TagName>{props.tagTotal}</S.TagName>
                    </S.TaggNameWrapper>
                )}
            </S.MyInformationWrapper>
        </S.NameWrapper>
    );
};
export default NameIntro;
