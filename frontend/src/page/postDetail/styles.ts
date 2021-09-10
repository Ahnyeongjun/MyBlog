import styled, { keyframes } from 'styled-components';
import { Route, Link } from 'react-router-dom';

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    &.check {
        background: black;
        color: white;
    }
`;
export const HeadWrapper = styled.head`
    width: 50vw;
    margin: 0 auto;
    min-height: 25vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`;
export const Title = styled.div`
    margin-top: 8vh;
    font-size: 4rem;
    font-weight: 800;
`;
export const infoWrapper = styled.div`
    display: flex;
    margin-top: 40px;
    flex-direction: row;
    height: 20px;
    margin-left: 1px;
`;
export const Writer = styled.div`
    font-size: 1rem;
    font-weight: 700;
    margin-right: 10px;
`;
export const createdAt = styled.div`
    margin-left: 10px;
    font-size: 1rem;
`;
export const TagWRapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    height: 40px;
`;
export const PostWrapper = styled.div`
    height: auto;
    min-height: calc(62vh - 60px);
    width: 50vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const TagItem = styled.div`
    height: auto;
    width: auto;
    &.check {
        color: black;
    }
`;
export const TagItemWrapper = styled.div`
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2.5rem;
    display: inline-flex;
    background: rgb(240, 240, 240);
    border-radius: 1rem;
    margin-bottom: 0.75rem;
    border: solid gray 1px;
    align-items: center;
    margin-right: 0.75rem;
    cursor: pointer;
`;

export const PostBody = styled.div`
    img {
        object-fit: cover;

        width: 50vw;
    }
`;
