import styled from 'styled-components';

export const MyInformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TagTitle = styled.h2`
    color: white;
    font-size: 80px;
    margin: 10px;
    margin-bottom: 20px;
    @media screen and (max-width: 550px) {
        font-size: 70px;
    }
`;
export const TagNameWrapper = styled.div`
    min-height: 300px;
    grid-area: tagName;
    background: linear-gradient(90deg, rgba(28, 27, 55, 1) 33%, rgba(35, 168, 184, 1) 84%, rgba(0, 212, 255, 1) 100%);
    padding: 40px 16vw;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1500px) {
        padding: 40px 10vw;
    }
    @media only screen and (max-width: 800px) {
        /* width: 84vw; */
    }
`;

export const TagName = styled.span`
    display: table;
    color: white;
    margin-top: 2rem;
    margin-left: 2rem;
    font-size: 25px;
`;
export const TaggNameWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
