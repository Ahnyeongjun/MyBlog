import styled, { keyframes } from 'styled-components';

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 1300px;
    margin: auto auto;
    margin-top: 10vh;
    @media only screen and (max-width: 1300px) {
        width: 100vw;
        margin: 0;
    }
`;
export const skillItem = styled.div`
    width: 130px;
    height: 240px;

    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1100px) {
        padding: 0 20vw;
    }
    @media only screen and (max-width: 900px) {
        padding: 0 15vw;
    }
    @media only screen and (max-width: 650px) {
        padding: 0 10vw;
    }
    @media only screen and (max-width: 450px) {
        padding: 0 5vw;
        width: 110px;
    }
`;
export const SkillImage = styled.img`
    width: 130px;
    height: 130px;
    background: black;
    @media only screen and (max-width: 450px) {
        height: 110px;
        width: 110px;
    }
`;
export const SkillContentWrapper = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1100px) {
        height: 30px;
    }
`;
export const SkillProgressWrapper = styled.div`
    height: 40px;
    background: #e9e9e9;
    margin: 5px 0;
    width: 100%;
    @media only screen and (max-width: 1100px) {
        height: 20px;
    }
`;
export const SkillProgress = styled.div<{ background: string; width: string }>`
    width: ${(props) => props.width};
    height: 100%;
    background: ${(props) => props.background};
`;
export const SkillContent = styled.div`
    text-align: center;
    width: 100%;
    font-family: NotoSans_Thin !important;
    height: 20px;
    font-size: 16px;
`;
export const SkillWrapper = styled.div`
    width: 1300px;
    margin-top: 10vh;
    height: 30vh;
    display: flex;
    justify-content: space-evenly;
    @media only screen and (max-width: 1300px) {
        width: 100vw;
    }
    @media only screen and (max-width: 1100px) {
        height: auto;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 5vh;
        &:nth-child(2) {
            margin: 0;
        }
    }
`;
export const BottomWrapper = styled.div`
    display: flex;
    background: rgb(201, 156, 245);
    height: 5px;
    width: 1300px;
    flex-direction: row-reverse;
    @media only screen and (max-width: 1300px) {
        width: 100vw;
    }
`;
export const BottomContent = styled.div`
    background: white;
    color: rgb(201, 156, 245);
    font-size: 30px;
    padding: 0 20px;
    @media only screen and (max-width: 1300px) {
        font-size: 20px;
    }
`;
