import styled from 'styled-components';

export const MyInformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 1600px;
    @media only screen and (max-width: 1920px) {
        width: 1200px;
    }
    @media only screen and (max-width: 1440px) {
        width: 1000px;
    }
    @media only screen and (max-width: 1200px) {
        width: 90vw;
    }
    @media only screen and (max-width: 800px) {
        width: 96vw;
    }
`;

export const Title = styled.h2`
    color: white;
    font-size: 80px;
    margin-bottom: 25px;
    @media screen and (max-width: 550px) {
        font-size: 70px;
    }
`;
export const PostNameIntro = styled.div`
    background: linear-gradient(90deg, rgba(28, 27, 55, 1) 33%, rgba(35, 168, 184, 1) 84%, rgba(0, 212, 255, 1) 100%);
    min-height: 300px;
    height: 40vh;
    display: flex;
    align-items: center;
    &.check{
        background: linear-gradient(90deg,#161616 33%, #2d2d2d 84%, gray 100%)
    }
`;
export const TagName = styled.span`
    display: table;
    color: white;
    font-size: 25px;
`;
export const TaggNameWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
