import styled from 'styled-components';

export const PostPage = styled.div`
    display: flex;
    height: auto;
    &.check {
        color: white;
        background: black;
    }
    flex-direction: column;
`;
export const Article = styled.article`
    display: flex;
    background: white;
    &.check {
        background: black;
    }
    margin: 0 auto;
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
