import React, { useState } from 'react';
import Toggle from '../Toggle/Toggle';
import * as S from './styles';

const HamburgerMenu = (props: any) => {
    const [isOpen, SetIsOpen] = useState(false);

    const UpdateIsOpen = () => {
        SetIsOpen(!isOpen);
    };
    return (
        <>
            <S.HambugerWrapper onClick={UpdateIsOpen}>
                {isOpen == true ? (
                    <S.OpenWrapper>
                        <S.Habuger_line className="active"></S.Habuger_line>
                        <S.Menu scroll={props.scrollPosition} className="active">
                            <S.Menu_list>
                                <S.Menu_Item>Blog</S.Menu_Item>
                                <S.Menu_Item>Post</S.Menu_Item>
                                {props.isLogin ? (
                                    <>
                                        <S.Menu_Item>Write</S.Menu_Item>
                                        <S.Menu_Item>LogOut</S.Menu_Item>
                                    </>
                                ) : (
                                    <>
                                        <S.Menu_Item>Resume</S.Menu_Item>
                                        <S.Menu_Item>Portfolio</S.Menu_Item>
                                    </>
                                )}

                                <S.Menu_Item>
                                    <Toggle />
                                </S.Menu_Item>
                            </S.Menu_list>
                        </S.Menu>
                    </S.OpenWrapper>
                ) : (
                    <S.CloseWrapper>
                        <S.Habuger_line></S.Habuger_line>
                    </S.CloseWrapper>
                )}
            </S.HambugerWrapper>
        </>
    );
};

export default HamburgerMenu;
