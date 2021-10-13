import styled, { keyframes } from 'styled-components';

export const Intro = styled.div`
    height: calc(100vh - 60px);
    min-height: 840px; //900px 60은 header

    @media only screen and (max-width: 500px) {
        height: calc(60vh - 60px);
        min-height: 540px;
    }
`;

export const SvgBox = styled.div`
    height: 500px;
    width: 500px;
    bottom: 105px;
    right: calc(0.5 * (100vw - 1200px));
    position: absolute;
    @media only screen and (max-height: 900px) {
        top: 310px;
    }
    @media only screen and (max-width: 1400px) {
        width: 400px;
        height: 400px;
        top: calc(50vh - 100px);
        left: calc(50vw - 200px);
    }
    @media only screen and (max-width: 900px) {
        width: 50vw;
        height: 50vw;
        top: 360px;
        left: calc(50vw - 25vw);
    }
    @media only screen and (max-width: 500px) {
        top: 220px;
    }
    @media only screen and (max-width: 400px) {
        top: 250px;
    }
`;
export const widthWrapper = styled.div`
    bottom: 60px;
    height: 5px;
    margin-left: 5px;
    right: calc(0.5 * (100vw - 1300px));
    background: rgb(201, 156, 245);
    position: absolute;
    width: 1300px;
    display: flex;
    @media only screen and (max-height: 900px) {
        top: 850px;
    }
    @media only screen and (max-width: 1400px) {
        width: 80vw;
        left: 10vw;
    }
    @media only screen and (max-width: 500px) {
        top: 500px;
    }
`;
export const ItemWrapper = styled.div`
    height: 70px;
    padding-top: 100px;
    display: flex;
    @media only screen and (max-height: 1000px) {
        padding-top: 90px;
    }
    @media only screen and (max-width: 1400px) {
        width: 80vw;
        margin-left: 10vw;
        padding-top: 70px;
    }
    @media only screen and (max-width: 500px) {
        padding-top: 50px;
        height: 40px;
    }
`;
export const BtnWrapper = styled.div`
    display: flex;
    margin-left: 400px;
    justify-content: space-between;
    @media only screen and (max-width: 1400px) {
        margin-left: 7vw;
        margin-right: 1vw;
        width: 20vw;
        margin-top: calc(50px - 4vw);
    }
`;
export const Btn = styled.div`
    margin: 0 12px;
    margin-top: 10px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    @media only screen and (max-width: 1400px) {
        width: 4vw;
        height: 4vw;
        margin: 0 0.5vw;
    }
    &.one {
        background: #f5c29c;
    }
    &.two {
        background: #bef59c;
    }
    &.three {
        background: #ee9cf5;
    }
    &.four {
        background: #c99cf5;
    }
`;
export const NotoSansBoldFont = styled.div`
    margin-top: 120px;
    color: #2c2828;
    font-family: NotoSans_Bold !important;
    font-size: 200px;
    @media only screen and (max-width: 1400px) {
        display: none;
    }
`;
export const NotoSansThinFont = styled.div`
    color: #2c2828;
    margin-left: 450px;
    font-family: NotoSans_Thin !important;
    font-size: 150px;
    @media only screen and (max-width: 1400px) {
        display: none;
    }
`;
export const heightWrapper = styled.div`
    position: absolute;
    height: 65vh;
    width: 5px;
    bottom: 65px;
    right: calc(0.5 * (100vw - 1300px));
    background: rgb(201, 156, 245);
    @media only screen and (max-height: 900px) {
        top: 260px;
        height: 590px;
    }
    @media only screen and (max-width: 1400px) {
        left: 90vw;
    }

    @media only screen and (max-width: 500px) {
        height: 300px;
        top: 200px;
    }
`;

export const decorate = styled.div`
    width: 240px;
    height: 100%;
    background: rgb(201, 156, 245);
    @media only screen and (max-width: 1400px) {
        width: 10vw;
    }
`;
export const decorate2 = styled.div`
    margin-left: 180px;
    width: 150px;
    height: 100%;
    background: rgb(201, 156, 245);
    @media only screen and (max-width: 1400px) {
        width: 24vw;
        margin-left: 18vw;
    }
`;

export const widthContent = styled.div`
    font-family: NotoSans_KR !important;
    font-size: 1.1rem;
    width: auto;
    line-height: 10px;
    color: rgb(201, 156, 245);
    padding-right: 20px;
    background: white;
    @media only screen and (max-width: 900px) {
        font-size: 12px;
    }
    @media only screen and (max-width: 500px) {
        font-size: 8px;
    }
`;
export const heightContent = styled.div`
    height: auto;
    width: 100%;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-family: NotoSans_KR !important;
    font-size: 1.1rem;
    color: rgb(201, 156, 245);
    white-space: nowrap;
    background: white;
    padding-bottom: 20px;
    @media only screen and (max-width: 900px) {
        font-size: 12px;
    }
    @media only screen and (max-width: 500px) {
        font-size: 8px;
        padding-bottom: 10px;
    }
`;
