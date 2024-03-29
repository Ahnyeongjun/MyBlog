import styled from 'styled-components';

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
    &.check{
        background: linear-gradient(90deg,#161616 33%, #2d2d2d 84%, gray 100%)
    }
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

export const SwiperWrapper = styled.div`
    width: 55%;
    @media only screen and (max-width: 1300px) {
        display: none;
    }
`;
