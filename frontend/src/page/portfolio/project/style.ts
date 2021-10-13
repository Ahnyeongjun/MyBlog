import styled from 'styled-components';

export const Project = styled.div`
    width: 1300px;
    margin: auto;
    min-height: 100vh;
    @media only screen and (max-width: 1300px) {
        width: 100vw;
    }
`;

export const projectWrapper = styled.div`
    display: grid;
    margin: 0 50px;
    grid-template-columns: 1fr 1fr 1fr;
    @media only screen and (max-width: 1300px) {
        margin: 0 20px;
    }
    @media only screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 750px) {
        margin: 0 10px;
    }
`;
export const proejctItem = styled.div`
    display: flex;
    flex-direction: column;
`;
export const backVer = styled.div<{ background: string }>`
    width: 350px;
    background: ${(props) => props.background};
    height: 300px;
    display: flex;
    align-items: center;
    text-align: center;
    @media only screen and (max-width: 750px) {
        width: 300px;
    }
    @media only screen and (max-width: 620px) {
        width: 250px;
    }
    @media only screen and (max-width: 520px) {
        width: 200px;
        height: 250px;
    }
    @media only screen and (max-width: 420px) {
        width: 150px;
    }
`;
export const frontVer = styled.div<{ background: string }>`
    width: 350px;
    position: absolute;
    background: ${(props) => props.background};
    height: 300px;
    display: flex;
    align-items: center;
    text-align: center;
    :hover {
        background: transparent;
        img {
            display: none;
        }
    }
    @media only screen and (max-width: 750px) {
        width: 300px;
    }
    @media only screen and (max-width: 620px) {
        width: 250px;
    }
    @media only screen and (max-width: 520px) {
        width: 200px;
        height: 250px;
    }
    @media only screen and (max-width: 420px) {
        width: 150px;
    }
`;
export const projectItemWrapper = styled.div`
    display: flex;
    padding: 4vh 0;
    flex-basis: 350px;
    align-items: center;
    flex-direction: column;
    @media only screen and (max-width: 750px) {
        flex-basis: 300px;
    }
    @media only screen and (max-width: 620px) {
        flex-basis: 250px;
    }
    @media only screen and (max-width: 520px) {
        flex-basis: 200px;
    }
    @media only screen and (max-width: 420px) {
        flex-basis: 150px;
    }
`;
export const projectImg = styled.img`
    object-fit: contain;
    margin: auto;
    width: 240px;
    height: 240px;
    @media only screen and (max-width: 520px) {
        width: 200px;
        height: 200px;
    }
    @media only screen and (max-width: 420px) {
        width: 150px;
        height: 150px;
    }
`;
//export const projectContent = styled.div`
//    padding: 4vh 2vw;
//    color: #3a3a3a;
//    font-size: 40px;
//    height: 40px;
//    padding-bottom: 0;
//    &:nth-child(1) {
//        padding-top: 15vh;
//    }
//    @media only screen and (max-width: 750px) {
//        font-size: 30px;
//    }
//`;
export const ProjectContentWrapper = styled.div`
    color: #3a3a3a;
    font-size: 40px;
    height: 40px;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 5vh;

    padding-top: calc(5vh + 100px);

    @media only screen and (max-width: 750px) {
        font-size: 30px;
        margin: auto;
    }
`;
export const projectContent = styled.a`
    text-align: center;
    color: #3a3a3a;
    font-family: NotoSans_Bold !important;
`;

export const projectTitle = styled.div``;
