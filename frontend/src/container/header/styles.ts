import styled from 'styled-components';

export const Header = styled.header<{ scroll: number }>`
    grid-area: header;
    height: 60px;
    position: sticky;
    top: 0;
    display: flex;
    background: ${(props) => (props.scroll < 20 ? '#1c1b37' : '#2d2d2d')};
    justify-content: space-between;
    z-index: 100;

    &.check {
        background: #2d2d2d;
    }
    @media only screen and (max-width: 800px) {
        width: 100vw;
    }
`;
export const Blog_Link = styled.a`
    cursor: pointer;
    padding: 21px 0 0 30px;
    width: 200px;
    height: 18px;
    color: white;
    font-size: 18px;
    :link {
        text-decoration: none;
    }
    @media only screen and (max-width: 800px) {
        font-size: 1rem;
        padding-left: 20px;
    }
`;

export const Blog_Category = styled.ul`
    margin-right: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 550px;
    @media only screen and (max-width: 1200px) {
        width: 400px;
        margin-right: 60px;
    }
    @media only screen and (max-width: 1000px) {
        width: 350px;
        margin-right: 40px;
    }
    @media only screen and (max-width: 800px) {
        display: none;
    }
`;

export const Category_item = styled.li`
    cursor: pointer;
    width: auto;
    color: white;
    :hover {
        color: gray;
    }
`;

export const Category_a = styled.a`
    color: white;
    text-decoration: none;
    :hover {
        color: gray;
    }
`;
