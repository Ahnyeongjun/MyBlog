import styled from 'styled-components';
import { BoxShaodw, BoxShaodwWhite } from '../../animation';
export const Series = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 60vh;
    grid-area: article;
`;
export const PostItemWpapper = styled.div`
    height: 180px;
    padding: 20px;
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

export const PostList = styled.div`
    width: 45vw;
    margin: 40px auto 0;
    @media only screen and (max-width: 1024px) {
        width: 65vw;
    }
    @media only screen and (max-width: 768px) {
        width: 80vw;
    }
    @media only screen and (max-width: 600px) {
        width: 90vw;
    }
    &.check {
        color: white;
    }
`;
export const PostTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 10px;
`;
export const Img = styled.img`
    height: 140px;
    object-fit: cover;
    width: 140px;
`;
export const PostContentWrapper = styled.div`
    display: flex;
`;
export const PostContent = styled.div`
    height: 120px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;
export const Text = styled.div`
    height: 80px;
    padding: 10px;
`;
export const CreatedAt = styled.div`
    padding: 10px;
`;
