import styled, { keyframes } from 'styled-components';

export const WriteWrapper = styled.div`
    display: grid;
    grid-template-areas: 'header' '.' 'title' 'tag' 'editor' '.' 'bottom';
    grid-template-rows: 60px 20px auto auto auto 30px 80px;
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
    min-height: calc(100vh - 380px);
    @media only screen and (max-height: 600px) {
        margin-bottom: 10px;
    }
`;

export const TitleWrapper = styled.div`
    grid-area: title;
    min-height: calc(130px - 24px);
    padding: 0 40px;
`;

export const Bottom = styled.div`
    grid-area: bottom;
    padding: 0 40px;
    display: flex;
    flex-direction: row-reverse;
`;

export const Btn = styled.button`
    border-radius: 20px;
    background: white;
    width: 200px;
    height: 40px;
    border: gray solid 1px;
    :hover {
        color: white;
        background: black;
    }
`;
