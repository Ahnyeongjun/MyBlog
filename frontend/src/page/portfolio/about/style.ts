import styled, { keyframes } from 'styled-components';
export const inner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
`;
export const About = styled.div`
    background-color: transparent;
    perspective: 1000px;
    display: flex;
    height: 50%;
    align-items: center;
    width: 1200px;
    margin: auto auto;

    :hover {
        ${inner} {
            transform: rotateY(180deg);
        }
    }
    @media only screen and (max-width: 1300px) {
        width: 80vw;
        left: 10vw;
    }
`;
export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: auto 0;
    @media only screen and (max-width: 1300px) {
        width: 100vw;
    }
`;
export const topWrapper = styled.div`
    align-items: center;
    display: flex;
    width: 500px;
    margin: auto 50px;
    @media only screen and (max-width: 1300px) {
        width: 35vw;
        margin: 0 50px;
    }
`;
export const BoldKoreanFont = styled.div`
    font-size: 75px;
    height: 90px;
    width: 210px;
    font-family: NotoSansKRFont_Bold !important;
    @media only screen and (max-width: 1300px) {
        font-size: 65px;
    }
`;
export const MiddleWrapper = styled.div`
    display: flex;
    width: 500px;
    margin: auto 50px;
    @media only screen and (max-width: 1300px) {
        width: 30vw;
        margin: auto 20px;
    }
`;
export const leftWrapper = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    margin: auto;
    @media only screen and (max-width: 1300px) {
        width: 35vw;
    }
`;
export const rightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin: auto;
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
    @media only screen and (max-width: 1300px) {
        height: 30px;
        width: 30px;
    }
`;
export const content = styled.div`
    font-size: 25px;
    color: #727272;
    width: calc(100% - 40px);
    @media only screen and (max-width: 1300px) {
        font-size: 19px;
    }
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
    width: 250px;
    margin-left: 10px;
    margin-top: 40px;
    font-size: 40px;
    font-family: NotoSans_Thin !important;
    @media only screen and (max-width: 1300px) {
        font-size: 30px;
        width: 230px;
        margin-left: 0;
    }
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
    width: 1300px;
    flex-direction: row-reverse;
`;
export const BottomContent = styled.div`
    background: white;
    color: rgb(201, 156, 245);
    font-size: 30px;
    padding: 0 20px;
`;
export const BackCard = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    border: rgb(201, 156, 245) solid 2px;

    backface-visibility: hidden;
    transform: rotateY(180deg);
`;

export const FrontCard = styled.div`
    border: rgb(201, 156, 245) solid 2px;

    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`;
