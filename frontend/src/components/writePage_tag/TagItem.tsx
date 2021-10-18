import React from 'react';

import * as S from './styles';

const TagItem = (props: any) => {
    return (
        <>
            <S.TagItemWrapper onClick={props.onClick}>
                <S.TagItem>{props.tag}</S.TagItem>
            </S.TagItemWrapper>
        </>
    );
};
export default TagItem;
