import styled from 'styled-components';

export const TagWrapper = styled.div`
    width: 85%;
    padding: 5px 20px;
    height: auto;
    display: flex;
    flex-direction: column;
`;
export const TagItemWrapper = styled.div`
    display: flex;
    height: 20px;
    width: 100%;
    margin-bottom: 5px;
    cursor: pointer;
`;
export const TagCount = styled.div`
    width: auto;
    height: 100%;
`;
export const TagItem = styled.a`
    width: auto;
    height: 100%;
    margin-right: 10px;
    :hover {
        border-bottom: solid black 1px;
    }
    &.check {
        :hover {
            border-bottom: solid white 1px;
        }
    }
`;
