import React, { useEffect, useMemo, useState } from 'react';
import Intro from './intro/intro';
import * as S from './style';
import './style.css';
const portfolioPage = () => {
    return (
        <S.portfolio>
            <S.Header></S.Header>
            <Intro></Intro>
            <S.About>
                <S.topWrapper>
                    <S.BoldKoreanFont>안영준</S.BoldKoreanFont>
                    <S.NotoSansThinFont>AhnYoungJun</S.NotoSansThinFont>
                </S.topWrapper>
                <S.MiddleWrapper>
                    <S.leftWrapper>
                        <S.ItemWrapper>
                            <S.Image></S.Image>
                            <S.content>https://github.com/Ahnyeongjun</S.content>
                        </S.ItemWrapper>
                        <S.ItemWrapper>
                            <S.Image></S.Image>
                            <S.content>010. 7670 . 3833</S.content>
                        </S.ItemWrapper>
                        <S.ItemWrapper>
                            <S.Image></S.Image>
                            <S.content>anh479512@gmail.com</S.content>
                        </S.ItemWrapper>
                        <S.ItemWrapper>
                            <S.Image></S.Image>
                            <S.content>https://youngjun.site</S.content>
                        </S.ItemWrapper>
                    </S.leftWrapper>
                    <S.rightWrapper>
                        <S.ItemWrapper2>
                            <S.content2>대덕소프트웨어마이스터고등학교</S.content2>
                            <S.content2>2010. 03 ~ 2022. 03</S.content2>
                        </S.ItemWrapper2>
                        <S.ItemWrapper2>
                            <S.content2>한컴인스페이스</S.content2>
                            <S.content2>2021. 07 ~ 2022. 10</S.content2>
                        </S.ItemWrapper2>
                    </S.rightWrapper>
                </S.MiddleWrapper>
                <S.BottomLine></S.BottomLine>
                <S.BottomWrapper>
                    <S.BottomContent>Profile</S.BottomContent>
                </S.BottomWrapper>
            </S.About>
        </S.portfolio>
    );
};

export default portfolioPage;
