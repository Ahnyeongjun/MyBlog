import React, { useState } from 'react';
import { logout } from '../../utils/authUtils';
import Toggle from '../Toggle/Toggle';
import * as S from './styles';

const HamburgerMenu = (props: any) => {
    const [isOpen, SetIsOpen] = useState(false);

    const UpdateIsOpen = () => {
        SetIsOpen(!isOpen);
    };
    const incompleteOnClick = () => {
        alert('아직 구현되지 않았습니다.');
    };
    const LogOutOnClick = () => {
        logout();
    };
    return (
        <>
            <S.HambugerWrapper onClick={UpdateIsOpen}>
                {isOpen == true ? (
                    <S.OpenWrapper>
                        <S.Habuger_line className="active"></S.Habuger_line>
                        <S.Menu scroll={props.scrollPosition} className="active">
                            <S.Menu_list>
                                <S.Menu_Item>
                                    <S.Category_a href="/"> Blog</S.Category_a>
                                </S.Menu_Item>
                                <S.Menu_Item>
                                    <S.Category_a href="/post"> Post</S.Category_a>
                                </S.Menu_Item>
                                {props.isLogin ? (
                                    <>
                                        <S.Menu_Item>
                                            <S.Category_a href="/write"> Write</S.Category_a>
                                        </S.Menu_Item>
                                        <S.Menu_Item onClick={LogOutOnClick}>LogOut</S.Menu_Item>
                                    </>
                                ) : (
                                    <>
                                        <S.Menu_Item onClick={incompleteOnClick}>Resume</S.Menu_Item>
                                        <S.Menu_Item onClick={incompleteOnClick}>Portfolio</S.Menu_Item>
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
