import styled from 'styled-components';

export const MyInformationWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const MyImage = styled.div`
    padding-top: 1rem;
    width: 7rem;
    height: 7rem;
    margin: 12px;
    @media screen and (max-width: 1920px) {
        padding-top: 0;
        width: 80px;
        height: 80px;
        margin: 12px;
    }
    @media screen and (max-width: 550px) {
        width: 3.5rem;
        height: 3.5rem;
    }
`;

export const MyIntrouce = styled.section`
    width: auto;
    height: 80px;
    color: black;
    &.check {
        color: white;
    }
`;

export const Image = styled.img`
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    border-radius: 100%;
    @media screen and (max-width: 1920px) {
        font-size: 25px;
        width: 80px;
        height: 80px;
    }
    @media screen and (max-width: 550px) {
        width: 3.5rem;
        height: 3.5rem;
    }
`;

export const MyName = styled.span`
    font-size: 3rem;
    margin-bottom: 0.5rem;
    @media screen and (max-width: 1920px) {
        font-size: 25px;
    }
`;

export const MyThink = styled.p`
    width: auto;

    font-size: 1.5rem;
    margin-top: 10px;
    @media screen and (max-width: 1920px) {
        font-size: 1rem;
    }
    @media screen and (max-width: 500px) {
        :nth-child(2) {
            display: none;
        }
    }
`;
