import styled, { keyframes } from 'styled-components';

export const Header = styled.div`
    height: 70px;
    width: 100vw;
    z-index: 100;
    top: 0;

    position: sticky;
    background: #2c2c2c;
`;
export const portfolio = styled.div`
    height: auto;

    background: white;
    @media only screen and (max-width: 1400px) {
        width: 100vw;
    }
`;
export const autoMargin = styled.div`
    width: 1300px;
    margin: 0 auto;
    @media only screen and (max-width: 1400px) {
        width: 100vw;
    }
`;
