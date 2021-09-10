import styled from 'styled-components';
import { BoxShaodw, HoverPage, BoxShaodwWhite } from '../../animation';

export const FeautredTitle = styled.a`
    margin-top: 10px;
    grid-area: title;
    font-size: 2.5rem;
    height: auto;
    text-align: center;
    display: block;
`;
export const FeautredTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    margin-bottom: 2rem;
`;
export const FeautredContent = styled.div`
    margin-top: 10px;
    height: 100px;
    font-size: 16px;
    grid-area: content;
`;
export const MainPostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    padding-left: 2vw;
    background: white;
    &.check {
        background: black;
    }
    @media only screen and (max-width: 900px) {
        width: 100%;
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
    min-height: 300px;
    max-height: 600px;
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
    height: 250px;
    padding: 10px 25px;
`;
export const MainPostImg = styled.img`
    width: 100%;
    height: 300px;
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
    width: 100%;

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

export const createdAt = styled.a`
    font-size: 1rem;
    color: black;
`;
