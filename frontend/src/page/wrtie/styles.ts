import { slideTop, slideDown } from '../../animation';
import styled, { keyframes } from 'styled-components';

export const WriteWrapper = styled.div`
    display: grid;
    grid-template-areas: 'header' '.' 'title' 'tag' 'editor' '.' 'bottom';
    grid-template-rows: 60px 20px auto auto auto 30px 80px;
    min-height: 100vh;
    background: white;
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
    margin: 0 10px;
    :hover {
        color: white;
        background: black;
    }
    &.check {
        color: white;
        background: black;
        :hover {
            color: black;
            background: white;
        }
    }
    @media only screen and (max-width: 600px) {
        margin: 30px 0px;
    }
`;

export const LastSavePageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background: rgb(250, 250, 250);
    animation: ${slideTop} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    &.delete {
        animation: ${slideDown} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
`;
export const PostPreview = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
`;
export const LastSavePage = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    min-height: 600px;
    max-width: 400px;
`;
export const Series = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    height: 60px;
    margin-bottom: 20px;
    outline: none;
    border: none;
`;

export const PostPreviewImageBtnWrapper = styled.div`
    margin-bottom: 10px;
    height: 200px;
    background: gray;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const PostPreviewImageOptionBtnWrapper = styled.div`
    margin: 10px 0;
    width: auto;
    display: flex;
    flex-direction: row-reverse;
`;
export const PostPreviewOptionbtn = styled.button`
    font-size: 10px;
    background: white;
`;
export const PostPreviewImage = styled.img`
    height: 200px;
    width: 400px;
    object-fit: cover;
`;

export const PostUploadBtn = styled.button`
    font-size: 15px;
`;
export const PostPreviewTitle = styled.div`
    font-size: 18px;
    font-weight: 800;
    height: 15px;
    margin-bottom: 10px;
`;
export const PostPreviewContent = styled.textarea`
    text-align: start;
    font-size: 12px;
    min-height: 200px;
    background: white;
    margin-bottom: 20px;
    padding: 15px;
    border: none;
    outline: none;
    resize: none;
`;
export const LastBtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
