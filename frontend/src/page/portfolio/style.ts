import styled, { keyframes } from 'styled-components';

export const Header = styled.div`
    height: 70px;
    background: #2c2c2c;
`;
export const portfolio = styled.div`
    height: 200vh;
    width: 1300px;
    margin: 0 auto;
    background: white;
    @media only screen and (max-width: 1400px) {
        width: 100vw;
    }
`;
export const About = styled.div`
    display: flex;
    flex-direction: column;
    height: 70vh;
`;
export const topWrapper = styled.div`
    display: flex;
    width: 1100px;
    margin: 0 auto;
    margin-top: 10vh;
`;
export const BoldKoreanFont = styled.div`
    font-size: 75px;
    height: 90px;

    font-family: NotoSansKRFont_Bold !important;
`;
export const MiddleWrapper = styled.div`
    display: flex;
    width: 1100px;
    margin: 0 auto;
    margin-top: 3vh;
`;
export const leftWrapper = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
`;
export const rightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 420px;
`;
export const ItemWrapper2 = styled.div`
    display: flex;
    height: 100px;
    flex-direction: column;
    margin-bottom: 3vh;
`;
export const ItemWrapper = styled.div`
    display: flex;
    height: 40px;
    margin-bottom: 3vh;
`;
export const Image = styled.div`
    background: black;
    height: 36px;
    width: 36px;
    margin: 2px;
    border-radius: 50%;
    margin: 0 15px;
`;
export const content = styled.div`
    font-size: 30px;
    color: #727272;
    width: calc(100% - 40px);
`;
export const content2 = styled.div`
    margin-bottom: 2vh;
    font-size: 30px;

    color: #727272;
    height: 40px;
    width: 100%;
`;
export const NotoSansThinFont = styled.div`
    height: 50px;
    margin-left: 10px;
    margin-top: 40px;
    font-size: 40px;
    font-family: NotoSans_Thin !important;
`;
export const BottomLine = styled.div`
    margin-top: 10vh;
    width: 1300px;
    height: 5px;
    background: rgb(201, 156, 245);
`;
export const skillWrapper = styled.div`
    width: 1300px;
    margin: 0 auto;
    height: 40vh;
    display: flex;
    justify-content: space-between;
`;
export const skillItem = styled.div`
    width: 130px;
    height: 240px;
    background: black;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;
export const BottomContent = styled.div`
    margin-top: 1vh;
    color: rgb(201, 156, 245);
    font-size: 40px;
`;
