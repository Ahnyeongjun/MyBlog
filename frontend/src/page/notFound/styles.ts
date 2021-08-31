import styled, { keyframes } from 'styled-components';
import { Route, Link } from 'react-router-dom';

export const NotFoudWrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
`;
export const HeaderWrapper = styled.div`
    height: 60px;
`;
export const NotFound = styled.div`
    display: flex;
    height: calc(100% - 60px);
    background: rgb(240, 240, 240);
    align-items: center;
    justify-content: center;
    overflow: auto;
    &.check {
        background: #1c1b37;
        color: white;
    }
`;
export const ErrorWrap = styled.div`
    position: relative;
    display: flex;
    width: 540px;
    height: 340px;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;

export const TopText = styled.p`
    position: relative;
    color: #1c1b37;
    font-size: 50px;
    font-weight: bold;
    &::before,
    &::after {
        top: 50%;
        position: absolute;
        display: flex;
        content: '  ';
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: #1c1b37;
    }
    &::before {
        left: -100px;
    }
    &::after {
        right: -100px;
    }
    &.check {
        color: white;
        &::before,
        &::after {
            background: white;
        }
    }
`;

export const MainText = styled.p`
    color: #1c1b37;
    font-size: 200px;
    font-weight: bold;
    &.check {
        color: white;
    }
`;

export const BorderText = styled.p`
    display: flex;
    width: 500px;
    height: 100px;
    color: #1c1b37;
    font-size: 50px;
    font-weight: bold;
    border-top: 5px solid #1c1b37;
    border-bottom: 5px solid #1c1b37;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
    &.check {
        color: white;
        border-top: 5px solid white;
        border-bottom: 5px solid white;
    }
`;

export const SubText = styled.p`
    margin: 30px 0 0 0;
    color: #1c1b37;
    font-size: 30px;
    text-align: center;
    &.check {
        color: white;
    }
`;

export const RedirectBtn = styled.a`
    position: absolute;
    display: flex;
    width: 162px;
    height: 48px;
    color: #1c1b37;
    font-size: 24px;
    font-weight: bold;
    border: 4px solid #1c1b37;
    border-radius: 34px;
    align-items: center;
    justify-content: center;
    right: 50px;
    bottom: 20px;
    &:hover {
        color: white;
        background: #1c1b37;
        border: 4px solid white;
    }
    &.check {
        border: 4px solid white;
        color: white;
        &:hover {
            color: #1c1b37;
            background: white;
        }
    }
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 1200px) {
        display: none;
    }
`;
