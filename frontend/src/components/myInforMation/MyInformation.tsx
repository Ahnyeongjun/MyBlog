import * as S from './styles';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { MyImage } from '../../asset';

const MyInformation = (props: any) => {
    return (
        <>
            <S.MyInformationWrapper>
                <S.MyImage>
                    <S.Image src={MyImage} />
                </S.MyImage>
                {props.check ? (
                    <S.MyIntrouce className="check">
                        <S.MyName>안영준</S.MyName>
                        <S.MyThink>세상에 도움이 되기 위해서 열심히 공부중인 개발자입니다.</S.MyThink>
                        <S.MyThink>자바와 자바스크립트를 기반으로 둔 개발자입니다.</S.MyThink>
                    </S.MyIntrouce>
                ) : (
                    <S.MyIntrouce>
                        <S.MyName>안영준</S.MyName>
                        <S.MyThink>세상에 도움이 되기 위해서 열심히 공부중인 개발자입니다.</S.MyThink>
                        <S.MyThink>자바와 자바스크립트를 기반으로 둔 개발자입니다.</S.MyThink>
                    </S.MyIntrouce>
                )}
            </S.MyInformationWrapper>
        </>
    );
};

export default MyInformation;
