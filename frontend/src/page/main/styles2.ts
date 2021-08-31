import styled from 'styled-components';
import { BoxShaodw, HoverPage, BoxShaodwWhite } from '../../animation';
export const FeaturedWrapper = styled.div`
    width: 1200px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1500px) {
        width: 950px;
    }
    @media screen and (max-width: 1300px) {
        width: 800px;
    }
    @media only screen and (max-width: 1000px) {
        width: 700px;
    }
    @media only screen and (max-width: 900px) {
        width: 650px;
    }
    @media only screen and (max-width: 800px) {
        width: 600px;
    }
    @media only screen and (max-width: 700px) {
        width: 550px;
    }
    @media only screen and (max-width: 650px) {
        width: 100%;
    }
`;

export const FeaturedItemWrapper = styled.div`
    background: rgb(240, 240, 240);

    display: flex;
    flex-direction: column;
    width: 840px;
    box-shadow: lavender 1px 1px;
    transform: translateZ(0px);
    height: 350px;
    &.check {
        box-shadow: 0 0 5px 0px grey;
        background: grey;
        color: white;
        :hover {
            animation: ${BoxShaodwWhite} 0s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
    }
    :hover {
        cursor: pointer;
        animation: ${BoxShaodw} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        /* box-shadow: lavender 1px 3px; */
    }
`;
export const FeautredContentWrapper = styled.div`
    height: 40%;
    padding: 5%;
`;

export const PageWrapper = styled.div`
    display: flex;
    height: 35px;
    padding-bottom: 25px;
    justify-content: space-between;
`;
export const PageNationBtnWrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const PageNationWrapper = styled.div`
    display: flex;
`;

export const FeautredImg = styled.img`
    grid-area: image;
    width: calc(100% + 1px);
    height: 60%;
`;
export const FeautredTitle = styled.div`
    margin-top: 10px;
    grid-area: title;
    font-size: 20px;
`;
export const FeautredContent = styled.div`
    margin-top: 10px;
    font-size: 15px;
    grid-area: content;
`;
export const Featured = styled.div`
    grid-area: featured;
    font-size: 35px;
    display: flex;
    flex-direction: column;
    padding: 40px 2vw;
`;

export const PageFont = styled.a<{ isTrending: boolean }>`
    text-align: center;
    display: block;
    height: 35px;
    width: 130px;
    padding: 10px;
    font-family: NotoSans !important;
    font-size: 28px;
    color: ${(props) => (props.isTrending == false ? 'black' : 'grey')};
    border-bottom: ${(props) => (props.isTrending == false ? ' solid black 2px' : null)};
    &.check {
        color: ${(props) => (props.isTrending == false ? 'white' : 'rgb(60, 60, 60);')};
        border-bottom: ${(props) => (props.isTrending == false ? ' solid white 2px' : null)};
        :hover {
            color: grey;
        }
    }
    :hover {
        animation: ${HoverPage} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        color: rgb(60, 60, 60);
    }
`;

export const PageNationBtn = styled.a`
    margin-right: 15px;
    padding: 0px;
    width: 35px;
    height: 35px;
    border: solid 1px rgb(240, 240, 240);
    text-align: center;
    &.check {
        :hover {
            background: grey;
        }
    }
    :hover {
        background: rgb(240, 240, 240);
        border: solid 1px rgb(220, 220, 220);
    }
`;
export const PageNationImg = styled.span`
    display: block;
    height: 10px;
    width: 0px;
`;
