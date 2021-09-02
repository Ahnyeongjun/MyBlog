import styled from 'styled-components';

export const Title = styled.div`
    min-height: 100%;
    width: 100%;
`;

export const Input = styled.textarea`
    resize: none;
    padding: 0px;
    display: inline-block;
    min-height: 70px;
    width: 100%;
    border: none;
    line-height: 1.5;

    :focus {
        outline: none;
    }
    font-family: NotoSansKR !important;
    font-size: 3rem;
    font-weight: 1000;
`;

export const underLine = styled.div`
    margin-top: 10px;
    content: '';
    display: block;
    width: 80px;
    border-bottom: solid rgb(28, 27, 55) 0.5rem;
`;
