import styled, { keyframes } from 'styled-components';

export const TagSearch = styled.div`
    display: grid;
    height: auto;
    grid-template-areas:
        'header header header '
        'tagName tagName tagName'
        '. . .'
        '. article .'
        '. . . '
        'footer footer footer';
    grid-template-rows: 60px 400px 20px auto 60px 50px;
    grid-template-columns: 1fr 4fr 1fr;
    &.check {
        color: white;
        background: black;
    }
    @media only screen and (max-width: 1500px) {
        grid-template-columns: 0.5fr 4fr 0.5fr;
    }
    @media only screen and (max-width: 800px) {
        grid-template-columns: 5px 4fr 5px;
    }
`;
export const Article = styled.article`
    grid-area: article;
    display: flex;
    background: white;
    &.check {
        background: black;
    }
`;
