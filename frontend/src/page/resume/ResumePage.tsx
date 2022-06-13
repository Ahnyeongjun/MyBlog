import React from 'react';
import HeaderContainer from '../../container/header/HeaderContainer';
import ResumePdf from '../../components/resumePdf/ResumePdf';
import * as S from './styles';

const pastPortfolioPage = () => {
    return (
        <>
            <S.pastWrapper>
                <HeaderContainer/>
                <ResumePdf />
            </S.pastWrapper>
        </>
    );
};
export default pastPortfolioPage;