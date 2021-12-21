import styled from 'styled-components';

export const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: auto;
    margin-top: 100px;
    margin-left: 5%;
    &.check {
        background-color: #161616;
    }
    @media only screen and (max-width: 900px) {
        display: none;
        padding: 0;
        margin: 0;
    }
`;
export const NavTitle = styled.div`
    font-family: NotoSans !important;
    font-size: 20px;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    @media only screen and (max-width: 900px) {
        display: none;
    }
    &.check {
        border-bottom: 1px solid white;
    }
`;
export const TagTitle = styled.div`
    font-family: NotoSans !important;
    font-size: 20px;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    &.check {
        border-bottom: 1px solid white;
    }
`;
export const NavItemWrapper = styled.div`
    margin-bottom: 20px;
`;
