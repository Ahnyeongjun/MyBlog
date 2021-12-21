import styled from 'styled-components';
import { BoxShaodw, HoverPage, BoxShaodwWhite } from '../../animation';

export const FeautredTitle = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 10px;
    margin-bottom: 30px;
    grid-area: title;
    font-size: 2rem;
    line-height:3rem;
    font-weight: 800;
    display: block;
    width: 100%;
    @media only screen and (max-width: 600px) {
        max-height: 80px;
        white-space: normal;
        display: -webkit-box;
        word-break: break-word;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 1.5rem;
        line-height:2.5rem;
        margin-bottom: 20px;
    }
`;

export const FeautredContent = styled.div`
    margin-top: 10px;
    max-height: 100px;
    font-size: 1.3rem;
    grid-area: content;

    word-break: break-word;
    overflow: hidden;
    word-wrap: break-word;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;

    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    @media only screen and (max-width: 600px) {
        font-size: 1rem;
    }
`;
export const MainPostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    background: white;
    &.check {
        background: #161616;
    }
    @media only screen and (max-width: 900px) {
        width: calc(100% - 20px);
        padding: 10px;
    }
`;
export const PageNationWrapper = styled.div`
    display: flex;
`;
export const SecularOneFont = styled.div`
    padding: 10px 10px;
    font-family: NotoSans !important;
    font-size: 35px;
`;
export const MainPostItemWrapper = styled.div`
    min-height: 200px;
    max-height: 650px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    background: rgb(240, 240, 240);
    &.check {
        color: white;
        background: grey;
        :hover {
            animation: ${BoxShaodwWhite} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
    }
    :hover {
        cursor: pointer;
        animation: ${BoxShaodw} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        /* box-shadow: lavender 1px 3px; */
    }
`;
export const ContentWrapper = styled.div`
    max-height: 280px;
    width: calc(100% - 50px);
    padding: 10px 25px;
`;
export const MainPostImg = styled.img`
    width: 100%;
    min-height: 200px;
    max-height: 240px;
`;
export const PageFont = styled.a<{ isPost: boolean }>`
    display: block;
    text-align: center;
    height: 35px;
    width: 130px;
    padding: 10px;
    font-family: NotoSans !important;
    font-size: 28px;
    color: ${(props) => (props.isPost == true ? 'black' : 'grey')};
    border-bottom: ${(props) => (props.isPost == true ? ' solid black 2px' : null)};
    &.check {
        color: ${(props) => (props.isPost == true ? 'white' : 'rgb(60, 60, 60)')};
        border-bottom: ${(props) => (props.isPost == true ? ' solid white 2px' : null)};
    }
    :hover {
        animation: ${HoverPage} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        color: grey;
    }
`;
export const Nav = styled.nav`
    padding-left: 5%;
    width: 30%;
    padding-top: 120px;
    display: flex;
    height: auto;
    flex-direction: column;
`;

export const TagList = styled.div`
    margin-top: 20px;
    width: 100%;
    min-height: 0px;
    max-height: 100px;
    display: flex;
`;

export const TagItem = styled.a`
    margin-right: 1rem;
    padding: 5px 1rem;
    font-size: 1rem;
    background: #e6f4fa;
    color: deepskyblue;
    width: auto;
    :hover {
        background: aliceblue;
    }
`;

export const createdAt = styled.div`
    padding: 20px 0 28px 0;

    font-size: 12px;

    height: 30px;
    color: black;
    width: 100%;
`;
