import styled, { keyframes } from 'styled-components';

export const WriteWrapper = styled.div`
    display: grid;
    grid-template-areas: 'header' '.' 'title' 'tag' 'editor' 'bottom';
    grid-template-rows: 60px 20px auto auto auto 80px;
    min-height: 100vh;
    &.check {
        background: black;
        color: white;
    }
`;
export const TagWrapper = styled.div`
    grid-area: tag;
    min-height: 80px;
    padding: 0 40px;
`;
export const EditorWrapper = styled.div`
    padding: 0 40px;
    grid-area: editor;
    min-height: calc(100vh - 350px);
`;

export const TitleWrapper = styled.div`
    grid-area: title;
    min-height: calc(130px - 24px);
    padding: 0 40px;
`;

export const Bottom = styled.div`
    grid-area: bottom;
`;
