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
    width: 400px;
    background: ${(props) => props.background};
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media only screen and (max-width: 1200px) {
        width: 350px;
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
export const ProjectTitle = styled.div`
    padding: 14% 0 0;
    font-size:30px;
    font-family: NotoSansKRFont_Bold !important;
    color:white;
`
export const frontVer = styled.div<{ background: string }>`
    width: 400px;
    position: absolute;
    background: ${(props) => props.background};
    height: 350px;
    display: flex;
    align-items: center;
    text-align: center;
    :hover {
        background: transparent;
        img {
            display: none;
        }
    }
    @media only screen and (max-width: 1200px) {
        width: 350px;
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
    &:hover{
        cursor: pointer;
    }
    @media only screen and (max-width: 1200px) {
        flex-basis: 330px;
    }
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
export const projectScreenImg = styled.img`
    object-fit: contain;
    margin: auto;
    margin-top: 0;
    width: 240px;
    height: auto;
    @media only screen and (max-width: 520px) {
        width: 200px;
    }
    @media only screen and (max-width: 420px) {
        width: 150px;
     
    }
`;

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
export const ProjectTagWrapper = styled.div`
    padding: 5% 0;
    display:flex;
    justify-content:center;
`;
export const ProjectTag = styled.div`
    padding: 1px 3px;
    margin: 0 5px;
    color:white;
    min-width: 100px;
    text-align: center;
    line-height: 30px;
    border-radius:50px;
    border: solid white 1px;
    font-size: 16px;
`;