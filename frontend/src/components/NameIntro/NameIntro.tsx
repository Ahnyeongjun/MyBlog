import React from 'react';
import { themeDataState } from '../../features/theme/themeSlice';
import { useTypedSelector } from '../../module/store';
import * as S from './styles';

const { themeData } = useTypedSelector(themeDataState);

const NameIntro = (props: any) => {
    return (
        <>
            {themeData != 'dark' ? (
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
            ) : (
                <S.NameWrapper className="check">
                    <S.MyInformationWrapper>
                        <S.TagTitle>{props.tagName}</S.TagTitle>
                        {props.tagTotal && (
                            <S.TaggNameWrapper>
                                <S.TagName>{props.tagTotal}</S.TagName>
                            </S.TaggNameWrapper>
                        )}
                    </S.MyInformationWrapper>
                </S.NameWrapper>
            )}
        </>
    );
};
export default NameIntro;
