import styled, { keyframes } from 'styled-components';
import { Route, Link } from 'react-router-dom';

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 120vh;
    &.check {
        background: black;
        color: white;
    }
`;
export const HeadWrapper = styled.head`
    width: 45vw;
    margin: 0 auto;
    min-height: 25vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    @media only screen and (max-width: 1024px) {
        width: 65vw;
    }
    @media only screen and (max-width: 768px) {
        width: 80vw;
    }
    @media only screen and (max-width: 600px) {
        width: 90vw;
    }
`;
export const Title = styled.div`
    margin-top: 8vh;
    font-size: 4rem;
    font-weight: 800;
    @media only screen and (max-width: 1500px) {
        font-size: 3rem;
    }
    @media only screen and (max-width: 1024px) {
        font-size: 2.5rem;
    }
    @media only screen and (max-width: 600px) {
        font-size: 1.8rem;
    }
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
    width: 45vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1024px) {
        width: 65vw;
    }
    @media only screen and (max-width: 768px) {
        width: 80vw;
    }
    @media only screen and (max-width: 600px) {
        width: 90vw;
    }
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
    @media only screen and (max-width: 768px) {
        height: 1.5rem;
        padding: 0 0.5rem;
        font-size: 12px;
    }
`;
export const MyInformationWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 45vw;
    background: transparent;
    margin: 0 auto;
    padding: 25px 0;
    @media only screen and (max-width: 1024px) {
        width: 65vw;
    }
    @media only screen and (max-width: 768px) {
        width: 80vw;
    }
    @media only screen and (max-width: 600px) {
        width: 90vw;
    }
    color: black;
    &.check {
        color: white;
    }
`;
export const PostBody = styled.div`
    img,
    p {
        object-fit: cover;
        word-wrap: break-word;
        width: 45vw;
        font-size: 1.2rem;
        @media only screen and (max-width: 1024px) {
            width: 65vw;
        }
        @media only screen and (max-width: 768px) {
            width: 80vw;
        }
        @media only screen and (max-width: 600px) {
            width: 90vw;
        }
    }
`;
