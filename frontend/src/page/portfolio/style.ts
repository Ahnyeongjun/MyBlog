import styled, { keyframes } from 'styled-components';

export const Header = styled.div`
    height: 70px;
    width: 100vw;
    z-index: 100;
    top: 0;

    position: sticky;
    background: #2c2c2c;
`;
export const portfolio = styled.div`
    height: 300vh;

    background: white;
    @media only screen and (max-width: 1400px) {
        width: 100vw;
    }
`;
export const autoMargin = styled.div`
    width: 1300px;
    margin: 0 auto;
`;
export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 1300px;
    margin: auto auto;
    margin-top: 10vh;
`;
export const skillItem = styled.div`
    width: 130px;
    height: 240px;
    background: white;
    display: flex;
    flex-direction: column;
`;
export const SkillImage = styled.img`
    width: 130px;
    height: 130px;
    background: black;
`;
export const SkillContentWrapper = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
`;
export const SkillProgressWrapper = styled.div`
    height: 40px;
    background: gray;
    margin: 5px 0;
    width: 100%;
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
`;
export const BottomWrapper = styled.div`
    display: flex;
    background: rgb(201, 156, 245);
    height: 5px;
    width: 1300px;
    margin-top: calc(10vh - 5px);
    flex-direction: row-reverse;
`;
export const BottomContent = styled.div`
    background: white;
    color: rgb(201, 156, 245);
    font-size: 30px;
    padding: 0 20px;
`;
