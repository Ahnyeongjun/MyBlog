import React, { useEffect, useMemo, useState } from 'react';
import Skill from './skill/skill';
import About from './about/about';
import Intro from './intro/intro';
import Project from './project/project';
import * as S from './style';

const portfolioPage = () => {
    return (
        <S.portfolio>
            <S.Header></S.Header>
            <S.autoMargin>
                <Intro></Intro>
                <About></About>
                <Skill></Skill>
                <Project></Project>
            </S.autoMargin>
        </S.portfolio>
    );
};

export default portfolioPage;
