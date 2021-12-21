import styled from 'styled-components';
import { RedBounse } from '../../animation';

export const Tag = styled.ul`
    min-height: 2.5rem;
    width: 100%;
    color: rgb(52, 58, 64);
    font-size: 1.125rem;
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    &.check {
        background-color: #161616;
        color: white;
    }
`;

export const TagItem = styled.div`
    height: auto;
    width: auto;
`;
export const TagItemWrapper = styled.div`
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2.5rem;
    display: inline-flex;
    background: rgb(240, 240, 240);
    border-radius: 1rem;
    margin-bottom: 0.75rem;
    border: solid gray 1px;
    align-items: center;
    margin-right: 0.75rem;
    cursor: pointer;
`;
export const TagInput = styled.input`
    display: inline-flex;
    margin-right: 0.75rem;
    margin-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2.5rem;
    border: none;
    min-width: 8rem;
    line-height: 1.5;
    cursor: text;
    font-size: 1.25rem;
    outline: none;
    &.error {
        animation: ${RedBounse} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    &.check {
        background-color: #161616;
        color: white;
    }
`;
