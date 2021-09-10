import styled from 'styled-components';

export const MyInformationWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const MyImage = styled.div`
    width: 80px;
    height: 80px;
    margin: 12px;
`;

export const MyIntrouce = styled.section`
    width: auto;
    height: 80px;
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
    @media only screen and (max-width: 1600px) {
        padding: 40px 8vw;
    }
    @media only screen and (max-width: 800px) {
        padding: 40px 4vw;
    }
`;
export const IntroduceWrapper = styled.div`
    height: auto;
    width: 1300px;

    margin-left: 50px;
    @media only screen and (max-width: 600px) {
        margin-left: 20px;
    }
    @media screen and (max-width: 800px) {
        align-items: center;
    }
    @media only screen and (max-width: 1300px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
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
    font-size: 1rem;
    margin-top: 10px;
`;

export const SwiperWrapper = styled.div`
    width: 55%;
    @media only screen and (max-width: 1300px) {
        display: none;
    }
`;
