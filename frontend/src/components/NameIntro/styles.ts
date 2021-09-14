import styled from 'styled-components';

export const MyInformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;
    margin: 0 auto;
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

export const TagTitle = styled.h2`
    color: white;
    font-size: 80px;
    margin-bottom: 25px;
    @media screen and (max-width: 550px) {
        font-size: 70px;
    }
`;
export const NameWrapper = styled.div`
    min-height: 300px;
    background: linear-gradient(90deg, rgba(28, 27, 55, 1) 33%, rgba(35, 168, 184, 1) 84%, rgba(0, 212, 255, 1) 100%);
    min-height: 40vh;
    display: flex;
    align-items: center;
`;

export const TagName = styled.span`
    display: table;
    color: white;
    font-size: 25px;
`;
export const TaggNameWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
