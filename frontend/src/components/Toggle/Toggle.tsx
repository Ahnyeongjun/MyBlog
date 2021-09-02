import React from 'react';
import { themeDataState, toggleTheme } from '../../features/theme/themeSlice';
import { useAppDispatch, useTypedSelector } from '../../module/store';

import * as S from './styles';

const Toggle = () => {
    const { themeData } = useTypedSelector(themeDataState);

    const dispatch = useAppDispatch();
    const updatetheme = () => {
        const theme = themeData == 'white' ? 'black' : 'white';
        dispatch(toggleTheme({ themeType: theme }));
    };
    return (
        <S.ToggleWrapper>
            {themeData == 'white' ? (
                <S.ToggleItem onClick={updatetheme}></S.ToggleItem>
            ) : (
                <S.ToggleItem className="check" onClick={updatetheme}></S.ToggleItem>
            )}
        </S.ToggleWrapper>
    );
};

export default Toggle;
