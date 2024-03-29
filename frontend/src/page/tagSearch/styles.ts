import styled from 'styled-components';

export const TagSearch = styled.div`
    display: flex;
    height: auto;
    flex-direction: column;
    &.check {
        background-color: #161616;
        color: white;
    }
`;
export const Article = styled.article`
    grid-area: article;
    display: flex;
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
