import styled from 'styled-components';

export const Footer = styled.footer`
    margin-top: 200px;
    grid-area: footer;
    text-align: center;
    background: rgb(240, 240, 240);
    height: 50px;
    &.check {
        background: grey;
        color: white;
    }
`;

export const FooterFont = styled.a`
    padding-top: 20px;
    color: black;
    display: block;
    font-size: 15px;
    &.check {
        color: white;
    }
`;
