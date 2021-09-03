import styled, { keyframes } from 'styled-components';

export const TagSearch = styled.div`
    display: grid;
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
        background: black;
        color: white;
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
