import styled from 'styled-components';
import { BoxShaodw, HoverPage, BoxShaodwWhite } from '../../animation';
export const FeaturedWrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;

export const FeaturedItemWrapper = styled.div`
    background: rgb(240, 240, 240);
    color: black;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: lavender 1px 1px;
    transform: translateZ(0px);
    height: 350px;
    &.check {
        box-shadow: 0 0 5px 0px grey;
        background: grey;
        color: white;
        :hover {
            animation: ${BoxShaodwWhite} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
    }
    :hover {
        cursor: pointer;
        animation: ${BoxShaodw} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        /* box-shadow: lavender 1px 3px; */
    }
`;
export const FeautredContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 170px;
    padding: 20px;
    text-align: left;
    @media only screen and (max-width: 600px) {
        max-height: 60%;
    }
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
    width: calc(100% + 1px);
    height: 170px;
    @media only screen and (max-width: 600px) {
        min-height: 40%;
        max-height: 50%;
    }
`;
export const FeautredTitle = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 5px;
    max-height: 20px;
    white-space: nowrap;
    font-size: 1.2rem;
    font-weight: 800;
    @media only screen and (max-width: 600px) {
        max-height: 3.9rem;
        line-height: 1.3rem;
        white-space: normal;
        display: -webkit-box;
        word-break: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`;
export const FeautredContent = styled.div`
    position: relative;
    width: 100%;
    margin-top: 10px;
    font-size: 1rem;
    line-height: 1.1rem;
    max-height: 4.4rem;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;
export const FeautreCreatedAt = styled.div`
    height: calc(10%-20px);
    font-size: 12px;
    padding: 10px 0;
    width: 100%;
`;
export const Featured = styled.div`
    grid-area: featured;
    font-size: 35px;
    display: flex;
    flex-direction: column;
    background: white;
    &.check {
        background-color: #161616;
    }
    padding: 40px 2vw;
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
