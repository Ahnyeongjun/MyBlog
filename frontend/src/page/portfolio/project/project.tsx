import * as S from './style';
import React from 'react';
import {
    blog_logo_portfolio,
    portfolio_camera_logo_portfolio,
    portfolio_logo_portfolio,
    portfolio_screen_portfolio,
    upgrade_log_portfolio,
    weleper_logo_portfolio,
} from '../../../asset/portfolio';
const project = () => {
    return (
        <S.Project>
            <S.projectContent>배포중인 프로젝트</S.projectContent>

            <S.projectWrapper>
                <S.projectItemWrapper>
                    <S.backVer background={'#55C696'}> </S.backVer>
                    <S.frontVer background={'#55C696'}>
                        <S.projectImg src={blog_logo_portfolio} />
                    </S.frontVer>
                </S.projectItemWrapper>
                <S.projectItemWrapper>
                    <S.backVer background={'#55C696'}> </S.backVer>
                    <S.frontVer background={'#55C6C6'}>
                        <S.projectImg src={portfolio_camera_logo_portfolio} />
                    </S.frontVer>
                </S.projectItemWrapper>{' '}
                <S.projectItemWrapper>
                    <S.frontVer background={'transparent'}> </S.frontVer>
                </S.projectItemWrapper>
            </S.projectWrapper>
            <S.projectContent>미배포 프로젝트</S.projectContent>

            <S.projectWrapper>
                <S.projectItemWrapper>
                    <S.backVer background={'#55C696'}> </S.backVer>
                    <S.frontVer background={'#5567C6'}>
                        <S.projectImg src={portfolio_logo_portfolio} />
                    </S.frontVer>
                </S.projectItemWrapper>
                <S.projectItemWrapper>
                    <S.backVer background={'#55C696'}> </S.backVer>
                    <S.frontVer background={'#C6BB55'}>
                        <S.projectImg src={weleper_logo_portfolio} />
                    </S.frontVer>
                </S.projectItemWrapper>{' '}
                <S.projectItemWrapper>
                    <S.backVer background={'#55C696'}> </S.backVer>
                    <S.frontVer background={'#A9C655'}>
                        <S.projectImg src={upgrade_log_portfolio} />
                    </S.frontVer>
                </S.projectItemWrapper>
                {/*   <S.projectItemWrapper>
        <S.backVer background={'#55C696'}> </S.backVer>
        <S.frontVer background={'#7955C6'}>
            <S.projectImg src={upgrade_log_portfolio} />
        </S.frontVer>
    </S.projectItemWrapper>{' '}
    <S.projectItemWrapper>
        <S.backVer background={'#55C696'}> </S.backVer>
        <S.frontVer background={'#C655C1'}>
            <S.projectImg src={portfolio_logo_portfolio} />
        </S.frontVer>
    </S.projectItemWrapper>
 */}
            </S.projectWrapper>
            {/*<S.projectWrapper>
    <S.projectItemWrapper>
        <S.backVer background={'#55C696'}> </S.backVer>
        <S.frontVer background={'#C65592'}>
            <S.projectImg src={portfolio_logo_portfolio} />
        </S.frontVer>
    </S.projectItemWrapper>
    <S.projectItemWrapper>
        <S.backVer background={'#55C696'}> </S.backVer>
        <S.frontVer background={'#C67755'}>
            <S.projectImg src={portfolio_logo_portfolio} />
        </S.frontVer>
    </S.projectItemWrapper>{' '}
    <S.projectItemWrapper>
        <S.backVer background={'#55C696'}> </S.backVer>
        <S.frontVer background={'#C65555'}>
            <S.projectImg src={portfolio_logo_portfolio} />
        </S.frontVer>
    </S.projectItemWrapper>
</S.projectWrapper>
<S.projectWrapper>
    <S.projectItemWrapper>
        <S.backVer background={'#55C696'}> </S.backVer>
        <S.frontVer background={'#C69255'}>
            <S.projectImg src={portfolio_logo_portfolio} />
        </S.frontVer>
    </S.projectItemWrapper>{' '}
    <S.projectItemWrapper>
        <S.backVer background={'#55C696'}> </S.backVer>
        <S.frontVer background={'#C6BB55'}>
            <S.projectImg src={weleper_logo_portfolio} />
        </S.frontVer>
    </S.projectItemWrapper>{' '}
    <S.projectItemWrapper>
        <S.backVer background={'#55C696'}> </S.backVer>
        <S.frontVer background={'#A9C655'}>
            <S.projectImg src={upgrade_log_portfolio} />
        </S.frontVer>
    </S.projectItemWrapper>
</S.projectWrapper>*/}
        </S.Project>
    );
};
export default project;
