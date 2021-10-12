import styled from 'styled-components';

export const Project = styled.div`
    width: 1300px;
    min-height: 100vh;
`;

export const projectWrapper = styled.div`
    display: flex;
    margin: 0 2vw;
    justify-content: space-between;
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
`;
export const projectItemWrapper = styled.div`
    display: flex;
    padding: 4vh 0;
    width: 350px;
`;
export const projectImg = styled.img`
    object-fit: contain;
    margin: auto;
    width: 240px;
    height: 240px;
`;
export const projectContent = styled.div`
    padding: 4vh 2vw;
    color: rgb(114, 114, 114);
    font-size: 40px;
    height: 40px;
    padding-bottom: 0;
    &:nth-child(1) {
        padding-top: 15vh;
    }
`;
export const projectTitle = styled.div``;
