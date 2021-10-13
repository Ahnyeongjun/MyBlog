import styled from 'styled-components';

export const HambugerWrapper = styled.div`
    margin-top: 6px;
    width: 50px;
    height: 40px;
    background: transparent;
    display: none;
    @media only screen and (max-width: 800px) {
        display: flex;
    }
`;

export const OpenWrapper = styled.div`
    /* padding: 10px; */
    display: inline-block;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin: 0;
    float: right;
    position: relative;
    z-index: 100;
`;

export const CloseWrapper = styled.div`
    padding: 10px;
    display: inline-block;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin: 0;
    float: right;
    position: relative;
    z-index: 100;
    width: 20px;
    height: 24px;
`;

export const Habuger_line = styled.div`
    &,
    ::before,
    ::after {
        display: inline-block;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        margin: 0;
        float: right;
        z-index: 100;
        width: 30px;
        height: 3px;
        background-color: white;
        position: absolute;
        left: 0;
        content: '';
        transition: background-color 0.1s 0.2s ease-in-out;
    }
    top: 50%;

    position: relative;
    ::before {
        top: -10px;
    }
    ::after {
        top: 10px;
    }
    &.active {
        background-color: transparent;
        ::before {
            transform: translateY(10px) rotate(45deg);
            transition: translateY(10px) rotate(45deg) 1s 2s ease-in-out;
        }
        ::after {
            transform: translateY(-10px) rotate(-45deg);
            transition: transform 1s 2s ease-in-out;
        }
    }
`;

export const Menu = styled.div<{ scroll: number }>`
    color: white;
    margin-top: 35px;
    height: 230px;
    width: 100vw;
    background-color: ${(props) => (props.scroll < 20 ? '#1c1b37' : 'black')};
    position: absolute;
    top: 0;
    right: -10;
    transform: translateY(-200px);
    &.active {
        transform: translateY(0);
        right: -50;
    }
`;

export const Menu_list = styled.div`
    list-style: none;
    margin-top: 40px;
    margin: 20px;
`;
export const Menu_Item = styled.div`
    padding: 10px 0;
    border-bottom: solid 1px gray;
`;

export const Category_a = styled.a`
    color: white;
    text-decoration: none;
    :hover {
        color: gray;
    }
`;
