import styled from 'styled-components';

export const PostPage = styled.div`
    display: flex;
    height: auto;
    min-height: 100vh;
    &.check {
        color: white;
        background-color: #161616;
    }
    flex-direction: column;
`;
export const Article = styled.article`
    display: flex;
    min-height: calc(60vh);
    background: white;
    &.check {
        background-color: #161616;
    }
    margin: 0 auto; 
    margin-bottom: 100px;

    width: 1600px;
    @media only screen and (max-width: 1920px) {
        width: 1200px;
    }
    @media only screen and (max-width: 1440px) {
        width: 1000px;
    }
    @media only screen and (max-width: 1200px) {
        width: 90vw;
    }
    @media only screen and (max-width: 800px) {
        width: 96vw;
    }
`;
