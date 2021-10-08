import styled, { keyframes } from 'styled-components';

export const About = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    margin: auto 0;
`;
export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: auto 0;
    @media only screen and (max-width: 1200px) {
        width: 100vw;
    }
`;
export const topWrapper = styled.div`
    display: flex;
    width: 1100px;
    margin: 0 auto;
    @media only screen and (max-width: 1200px) {
        width: 100vw;
        margin: 0;
    }
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
    margin-top: 5vh;
    @media only screen and (max-width: 1200px) {
        width: 100vw;
        margin: 0;
        margin-top: 5vh;
    }
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

export const BottomWrapper = styled.div`
    display: flex;
    background: rgb(201, 156, 245);
    height: 5px;
    width: 100vw;
    flex-direction: row-reverse;
`;
export const BottomContent = styled.div`
    background: white;
    color: rgb(201, 156, 245);
    font-size: 30px;
    padding: 0 20px;
`;
