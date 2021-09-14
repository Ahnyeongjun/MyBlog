import { BoxShaodw, BoxShaodwWhite } from '../../animation';
import styled from 'styled-components';

export const Series = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;
export const SeriesItem = styled.div`
    margin: 25px 20px 10px 0px;
    width: 45%;
    height: 300px;
    background: rgb(240, 240, 240);
    @media only screen and (max-width: 1200px) {
        width: 100%;
        padding: 10% 10px;
    }
    &.check {
        background: gray;
    }
    @media only screen and (max-width: 600px) {
        margin-right: 0;
    }
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
export const SeriesImage = styled.img`
    height: 200px;
    background: transparent;
    width: 100%;
`;
export const SeriesTitle = styled.div`
    height: 30px;
    font-size: 1.5rem;
    padding: 10px;
    padding-left: 20px;
    font-weight: 800;
`;

export const SeriesContent = styled.div`
    height: 30px;
    font-size: 1rem;
    padding-left: 20px;
`;
