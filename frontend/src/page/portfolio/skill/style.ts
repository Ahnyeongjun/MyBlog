import styled, { keyframes } from 'styled-components';

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 1100px;

    width: 1300px;
    margin: auto auto;
    padding-top: 100px;
    @media only screen and (max-width: 1300px) {
        width: 100vw;
    }
    @media only screen and (max-width: 1100px) {
        margin: 0;
    }
`;
export const skillItem = styled.div`
    width: 130px;
    height: 240px;

    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 800px) {
        height: 220px;
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
    @media only screen and (max-width: 800px) {
        height: 30px;
    }
`;
export const SkillProgressWrapper = styled.div`
    height: 40px;
    background: #e9e9e9;
    margin: 5px 0;
    width: 100%;
    @media only screen and (max-width: 800px) {
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
export const BigSkillWraper = styled.div`
    height: auto;
    margin: auto;
    border-right: 2px rgb(201, 156, 245) solid;

    border-left: 2px rgb(201, 156, 245) solid;
    @media only screen and (max-width: 1300px) {
        border: none;
    }
`;
export const SkillWrapper = styled.div`
    width: 1300px;
    margin-top: 5vh;
    height: 30vh;
    display: flex;
    justify-content: space-evenly;
    @media only screen and (max-width: 1300px) {
        width: 100vw;
    }
    @media only screen and (max-width: 800px) {
        height: auto;
        flex-wrap: wrap;
        justify-content: center;

        margin: 0;
    }
`;
export const BottomWrapper = styled.div`
    margin-top: 20vh;
    display: flex;
    background: rgb(201, 156, 245);
    height: 5px;
    width: 1300px;
    flex-direction: row-reverse;
    @media only screen and (max-width: 1300px) {
        width: 100vw;
    }
    @media only screen and (max-width: 800px) {
        margin-top: 5vh;
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
export const ProjectContentWrapper = styled.div`
    color: #3a3a3a;
    font-size: 70px;
    height: 40px;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 10vh;
    @media only screen and (max-width: 750px) {
        font-size: 60px;
        margin: auto;
    }
`;
export const projectContent = styled.a`
    text-align: center;
    color: #3a3a3a;
    font-family: NotoSans_Bold !important;
`;
