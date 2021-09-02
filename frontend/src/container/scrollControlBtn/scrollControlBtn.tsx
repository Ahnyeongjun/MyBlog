import React, { useCallback, useRef, useState } from 'react';
import { themeDataState } from '../../features/theme/themeSlice';
import { useTypedSelector } from '../../module/store';
import * as S from './styles';

const scrollControlBtn = (props: any) => {
    const { themeData } = useTypedSelector(themeDataState);

    const onClickTopBtn = () => {
        window.scrollTo({
            top: 0,
        });
    };

    const onClickBottomBtn = () => {
        window.scrollTo({
            top: document.body.scrollHeight - document.body.clientHeight,
        });
    };
    return (
        <>
            {themeData != 'white' ? (
                <S.BtnWrapper>
                    <S.BtnItemWrapper
                        className="check"
                        onClick={onClickTopBtn}
                        scroll={props.scrollPosition}
                        color={props.scrollPosition == 0 ? 'grey' : 'white'}
                    >
                        <S.Btn>위</S.Btn>
                    </S.BtnItemWrapper>
                    <S.BtnItemWrapper
                        className="check"
                        onClick={onClickBottomBtn}
                        scroll={props.scrollPosition}
                        color={props.scrollPosition == document.body.scrollHeight - document.body.clientHeight ? 'grey' : 'white'}
                    >
                        <S.Btn>아래</S.Btn>
                    </S.BtnItemWrapper>
                </S.BtnWrapper>
            ) : (
                <S.BtnWrapper>
                    <S.BtnItemWrapper
                        onClick={onClickTopBtn}
                        scroll={props.scrollPosition}
                        color={props.scrollPosition == 0 ? 'grey' : 'white'}
                    >
                        <S.Btn>위</S.Btn>
                    </S.BtnItemWrapper>
                    <S.BtnItemWrapper
                        onClick={onClickBottomBtn}
                        scroll={props.scrollPosition}
                        color={props.scrollPosition == document.body.scrollHeight - document.body.clientHeight ? 'grey' : 'white'}
                    >
                        <S.Btn>아래</S.Btn>
                    </S.BtnItemWrapper>
                </S.BtnWrapper>
            )}{' '}
        </>
    );
};
export default scrollControlBtn;
