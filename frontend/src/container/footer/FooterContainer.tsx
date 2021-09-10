import React from 'react';
import { themeDataState } from '../../features/theme/themeSlice';
import { useTypedSelector } from '../../module/store';
import * as S from './styles';
const FooterContainer = () => {
    const { themeData } = useTypedSelector(themeDataState);

    return (
        <>
            {themeData != 'white' ? (
                <S.Footer className="check">
                    <S.FooterFont className="check">© 2021. AhnyoungJun all rights reserved.</S.FooterFont>
                </S.Footer>
            ) : (
                <S.Footer>
                    <S.FooterFont>© 2021. AhnyoungJun all rights reserved.</S.FooterFont>
                </S.Footer>
            )}
        </>
    );
};
export default FooterContainer;
