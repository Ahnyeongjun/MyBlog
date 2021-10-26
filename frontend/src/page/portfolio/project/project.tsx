import * as S from './style';
import React from 'react';
import {
    blog_logo_portfolio,
    blog_screen_portfolio,
    portfolio_camera_logo_portfolio,
    portfolio_camera_screen_portfolio,
    portfolio_sticky_logo_portfolio,
    portfolio_sticky_screen_portfolio,
    streaming_logo_portfolio,
    streaming_screen_portfolio,
    upgrade_log_portfolio,
    upgrade_screen_portfolio,
    weleper_logo_portfolio,
    welper_screen_portfolio,
} from '../../../asset/portfolio';
const project = () => {
    return (
        <S.Project>
            <S.ProjectContentWrapper>
                <S.projectContent>Project (Running)</S.projectContent>
            </S.ProjectContentWrapper>

            <S.projectWrapper>
                <S.projectItemWrapper>
                    <S.backVer background={'#4DB387'}>
                        <S.ProjectTitle>MyBlog</S.ProjectTitle>
                        <S.ProjectTagWrapper>
                            <S.ProjectTag> 관여도 100% </S.ProjectTag>
                        </S.ProjectTagWrapper>
                        <S.projectScreenImg src={blog_screen_portfolio} />
                    </S.backVer>
                    <S.frontVer background={'#55C696'}>
                        <S.projectImg src={blog_logo_portfolio} />
                    </S.frontVer>
                </S.projectItemWrapper>
                <S.projectItemWrapper>
                    <S.backVer background={'#4DB3B3'}>
                        <S.ProjectTitle>Portfolio_2021</S.ProjectTitle>
                        <S.ProjectTagWrapper>
                            <S.ProjectTag> 관여도 100% </S.ProjectTag>
                        </S.ProjectTagWrapper>
                        <S.projectScreenImg src={portfolio_camera_screen_portfolio} />
                    </S.backVer>
                    <S.frontVer background={'#55C6C6'}>
                        <S.projectImg src={portfolio_camera_logo_portfolio} />
                    </S.frontVer>
                </S.projectItemWrapper>
                <S.projectItemWrapper>
                    <S.backVer background={'#4D75B3'}>
                        <S.ProjectTitle>Streaming_2021</S.ProjectTitle>
                        <S.ProjectTagWrapper>
                            <S.ProjectTag> 토이 프로젝트 </S.ProjectTag>
                            <S.ProjectTag> HLS, Socket </S.ProjectTag>
                        </S.ProjectTagWrapper>
                        <S.projectScreenImg src={streaming_screen_portfolio} />
                    </S.backVer>
                    <S.frontVer background={'#5582c6'}>
                        <S.projectImg src={streaming_logo_portfolio} />
                    </S.frontVer>
                </S.projectItemWrapper>
            </S.projectWrapper>
            <S.ProjectContentWrapper>
                <S.projectContent>Project (NON Running)</S.projectContent>
            </S.ProjectContentWrapper>

            <S.projectWrapper>
                <S.projectItemWrapper>
                    <S.backVer background={'#4D5DB3'}>
                        <S.ProjectTitle>PortFolio_sticky</S.ProjectTitle>
                        <S.ProjectTagWrapper>
                            <S.ProjectTag> 관여도 100% </S.ProjectTag>
                            <S.ProjectTag> 첫 프론트앤드 </S.ProjectTag>
                        </S.ProjectTagWrapper>
                        <S.projectScreenImg src={portfolio_sticky_screen_portfolio} />
                    </S.backVer>
                    <S.frontVer background={'#5567C6'}>
                        <S.projectImg src={portfolio_sticky_logo_portfolio} />
                    </S.frontVer>
                </S.projectItemWrapper>
                <S.projectItemWrapper>
                    <S.backVer background={'#B3A94D'}>
                        <S.ProjectTitle>Welper</S.ProjectTitle>
                        <S.ProjectTagWrapper>
                            <S.ProjectTag> 백앤드 100% </S.ProjectTag>
                        </S.ProjectTagWrapper>
                        <S.projectScreenImg src={welper_screen_portfolio} />
                    </S.backVer>
                    <S.frontVer background={'#C6BB55'}>
                        <S.projectImg src={weleper_logo_portfolio} />
                    </S.frontVer>
                </S.projectItemWrapper>
                <S.projectItemWrapper>
                    <S.backVer background={'#98B34D'}>
                        <S.ProjectTitle>Upgrade</S.ProjectTitle>
                        <S.ProjectTagWrapper>
                            <S.ProjectTag> 백앤드 30% </S.ProjectTag>
                            <S.ProjectTag> 숙제, 투표 개발 </S.ProjectTag>
                        </S.ProjectTagWrapper>
                        <S.projectScreenImg src={upgrade_screen_portfolio} />
                    </S.backVer>
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
