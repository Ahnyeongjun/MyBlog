import styled from 'styled-components';

export const MyInformationWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const MyImage = styled.div`
    padding-top: 1rem;
    width: 7rem;
    height: 7rem;
    margin: 12px;
    @media screen and (max-width: 1920px) {
        padding-top: 0;
        width: 80px;
        height: 80px;
        margin: 12px;
    }
    @media screen and (max-width: 550px) {
        width: 3.5rem;
        height: 3.5rem;
    }
`;

export const MyIntrouce = styled.section`
    width: auto;
    height: 80px;
`;

export const Tit_intro = styled.h2`
    color: white;
    font-size: 6rem;
    margin: 10px;
    margin-bottom: 20px;
    @media screen and (max-width: 1920px) {
        font-size: 80px;
    }
    @media screen and (max-width: 550px) {
        font-size: 3.5rem;
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
    @media only screen and (max-width: 600px) {
        width: 96vw;
        padding: 2vw;
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
        margin: 10px;
    }
`;

export const Image = styled.img`
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    border-radius: 100%;
    @media screen and (max-width: 1920px) {
        font-size: 25px;
        width: 80px;
        height: 80px;
    }
    @media screen and (max-width: 550px) {
        width: 3.5rem;
        height: 3.5rem;
    }
`;

export const MyName = styled.span`
    color: white;
    font-size: 3rem;
    margin-bottom: 0.5rem;
    @media screen and (max-width: 1920px) {
        font-size: 25px;
    }
`;

export const MyThink = styled.p`
    width: auto;
    color: white;
    font-size: 1.5rem;
    margin-top: 10px;
    @media screen and (max-width: 1920px) {
        font-size: 1rem;
    }
    @media screen and (max-width: 500px) {
        :nth-child(2) {
            display: none;
        }
    }
`;

export const SwiperWrapper = styled.div`
    width: 55%;
    @media only screen and (max-width: 1300px) {
        display: none;
    }
`;
