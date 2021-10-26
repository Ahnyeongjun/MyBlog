import React from 'react';
import Skill from './skill/skill';
import About from './about/about';
import Intro from './intro/intro';
import Project from './project/project';
import Footer from './footer/footer';
import Header from './header/HeaderContainer';
import * as S from './style';

const portfolioPage = () => {
    return (
        <S.portfolio>
            <Header />
            <S.autoMargin>
                <Intro />
                <About />
                <Skill />
                <Project />
            </S.autoMargin>
            <Footer />
        </S.portfolio>
    );
};

export default portfolioPage;
