import React, { useEffect, useMemo, useState } from 'react';
import * as S from './style';
import {
    docker_portfolio,
    javascript_portfolio,
    java_portfolio,
    nodejs_portfolio,
    react_portfolio,
    springboot_portfolio,
    typescript_portfolio,
} from '../../../asset/portfolio';
const skill = () => {
    return (
        <S.Skill>
            <S.SkillWrapper>
                <S.skillItem>
                    <S.SkillImage src={typescript_portfolio} />
                    <S.SkillContentWrapper>
                        <S.SkillContent> TypeScript - 90%</S.SkillContent>
                    </S.SkillContentWrapper>
                    <S.SkillProgressWrapper>
                        <S.SkillProgress width={'90%'} background={'#3B96D4'} />
                    </S.SkillProgressWrapper>
                </S.skillItem>
                <S.skillItem>
                    <S.SkillImage src={docker_portfolio} />
                    <S.SkillContentWrapper>
                        <S.SkillContent> docker - 90%</S.SkillContent>
                    </S.SkillContentWrapper>
                    <S.SkillProgressWrapper>
                        <S.SkillProgress width={'90%'} background={'#D0E9CF'} />
                    </S.SkillProgressWrapper>
                </S.skillItem>
                <S.skillItem>
                    <S.SkillImage src={java_portfolio} />
                    <S.SkillContentWrapper>
                        <S.SkillContent> java - 90%</S.SkillContent>
                    </S.SkillContentWrapper>
                    <S.SkillProgressWrapper>
                        <S.SkillProgress width={'90%'} background={'#EBD7BA'} />
                    </S.SkillProgressWrapper>
                </S.skillItem>
                <S.skillItem>
                    <S.SkillImage src={javascript_portfolio} />
                    <S.SkillContentWrapper>
                        <S.SkillContent> javaScript - 90%</S.SkillContent>
                    </S.SkillContentWrapper>
                    <S.SkillProgressWrapper>
                        <S.SkillProgress width={'90%'} background={'#F4E45C'} />
                    </S.SkillProgressWrapper>
                </S.skillItem>
            </S.SkillWrapper>
            <S.SkillWrapper>
                <S.skillItem>
                    <S.SkillImage src={react_portfolio} />
                    <S.SkillContentWrapper>
                        <S.SkillContent> react - 90%</S.SkillContent>
                    </S.SkillContentWrapper>
                    <S.SkillProgressWrapper>
                        <S.SkillProgress width={'90%'} background={'#FFC898'} />
                    </S.SkillProgressWrapper>
                </S.skillItem>
                <S.skillItem>
                    <S.SkillImage src={springboot_portfolio} />
                    <S.SkillContentWrapper>
                        <S.SkillContent> react - 90%</S.SkillContent>
                    </S.SkillContentWrapper>
                    <S.SkillProgressWrapper>
                        <S.SkillProgress width={'90%'} background={'#FFDAC7'} />
                    </S.SkillProgressWrapper>
                </S.skillItem>
                <S.skillItem>
                    <S.SkillImage src={nodejs_portfolio} />
                    <S.SkillContentWrapper>
                        <S.SkillContent> nodejs - 90%</S.SkillContent>
                    </S.SkillContentWrapper>
                    <S.SkillProgressWrapper>
                        <S.SkillProgress width={'90%'} background={'#FFDEFA'} />
                    </S.SkillProgressWrapper>
                </S.skillItem>
                <S.skillItem>
                    <S.SkillImage />
                    <S.SkillContentWrapper>
                        <S.SkillContent> TypeScript - 90%</S.SkillContent>
                    </S.SkillContentWrapper>
                    <S.SkillProgressWrapper>
                        <S.SkillProgress width={'90%'} background={'#F4E45C'} />
                    </S.SkillProgressWrapper>
                </S.skillItem>
            </S.SkillWrapper>
            <S.BottomWrapper>
                <S.BottomContent>2021. Skill</S.BottomContent>
            </S.BottomWrapper>
        </S.Skill>
    );
};
export default skill;
