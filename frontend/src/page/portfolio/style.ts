import styled from 'styled-components';

export const Intro = styled.div`
    height: calc(100vh - 70px);
    width: 1300px;
    margin: 0 auto;
    background: white;
`;
export const Header = styled.div`
    height: 70px;
    background: #2c2c2c;
`;
export const SvgBox = styled.div`
    height: 500px;
    width: 500px;
    bottom: 105px;
    right: calc(0.5 * (100vw - 1200px));
    position: absolute;
`;
export const widthWrapper = styled.div`
    bottom: 45px;
    right: calc(0.5 * (100vw - 1300px));
    height: 20px;
    position: absolute;
    width: 1300px;
    display: flex;
`;
export const ItemWrapper = styled.div`
    height: 70px;
    margin-top: 120px;
    display: flex;
`;
export const BtnWrapper = styled.div`
    display: flex;
    margin-left: 400px;
    justify-content: space-between;
`;
export const Btn = styled.div`
    margin: 0 12px;
    margin-top: 10px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
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
`;
export const NotoSansThinFont = styled.div`
    color: #2c2828;
    margin-left: 450px;
    font-family: NotoSans_Thin !important;
    font-size: 150px;
`;
export const heightWrapper = styled.div`
    position: absolute;
    height: 65vh;
    width: 5px;
    bottom: 65px;
    right: calc(0.5 * (100vw - 1300px));
`;
export const widthBox = styled.div`
    display: flex;
    height: 5px;
    width: 65%;
    background: rgb(201, 156, 245);
`;
export const decorate = styled.div`
    width: 240px;
    height: 100%;
    background: rgb(201, 156, 245);
`;
export const decorate2 = styled.div`
    margin-left: 180px;
    width: 150px;
    height: 100%;
    background: rgb(201, 156, 245);
`;

export const widthContent = styled.div`
    font-family: NotoSans_KR !important;
    font-size: 20px;
    width: 35%;
    line-height: 10px;
    color: rgb(201, 156, 245);
`;
export const heightContent = styled.div`
    height: 80%;
    width: 100%;
    writing-mode: vertical-rl;
    font-family: NotoSans_KR !important;
    font-size: 20px;
    color: rgb(201, 156, 245);
`;
export const heightBox = styled.div`
    height: 20%;
    width: 100%;
    background: rgb(201, 156, 245);
`;
