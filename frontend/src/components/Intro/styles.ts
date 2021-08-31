import styled from 'styled-components';

export const IntroduceWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const MyImage = styled.div`
    width: 72px;
    height: 72px;
    margin: 12px;
`;

export const MyIntrouce = styled.section`
    width: auto;
    height: 72px;
`;

export const Tit_intro = styled.h2`
    color: white;
    font-size: 80px;
    margin: 10px;
    margin-bottom: 20px;
    @media screen and (max-width: 550px) {
        font-size: 70px;
    }
`;
export const Intro = styled.div`
    min-height: 300px;
    grid-area: intro;
    background: linear-gradient(90deg, rgba(28, 27, 55, 1) 33%, rgba(35, 168, 184, 1) 84%, rgba(0, 212, 255, 1) 100%);
    padding: 40px 16vw;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1500px) {
        padding: 40px 10vw;
    }
    @media only screen and (max-width: 800px) {
        /* width: 84vw; */
    }
`;
export const InformationWrapper = styled.div`
    height: auto;
    width: 100%;
    margin-left: 50px;
    @media only screen and (max-width: 600px) {
        margin-left: 20px;
    }
`;

export const Image = styled.img`
    width: 72px;
    height: 72px;
    object-fit: cover;
    border-radius: 100%;
`;

export const MyName = styled.span`
    color: white;
    font-size: 25px;
`;

export const MyThink = styled.p`
    width: auto;
    color: white;
    font-size: 15px;
    margin-top: 10px;
`;

export const SwiperWrapper = styled.div`
    width: 55%;
    @media only screen and (max-width: 1200px) {
        display: none;
    }
`;
export const Wrapper = styled.div`
    width: 1300px;
    @media only screen and (max-width: 1200px) {
        width: 100%;
    }
    @media screen and (max-width: 800px) {
        display: flex;
        align-items: center;
    }
`;
