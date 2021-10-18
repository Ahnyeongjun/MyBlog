import React, { useCallback, useState } from 'react';
import { themeDataState } from '../../features/theme/themeSlice';
import { editorState, pushTag, removeTag } from '../../features/editor/editorSlice';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import * as S from './styles';
import TagItem from './TagItem';

const Tag = (props: any) => {
    const { tag } = useTypedSelector(editorState);
    const dispatch = useAppDispatch();

    const [oneTag, setOneTag] = useState<string>();
    const [invalid, setInvaild] = useState<boolean>(true);
    const onChange = useCallback((e) => {
        const { value } = e.target;
        setOneTag(value);
    }, []);

    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            if (!tag.includes(oneTag) && oneTag) {
                dispatch(pushTag({ tag: oneTag }));
                setOneTag('');
            } else {
                setInvaild(false);
                setTimeout(() => {
                    setOneTag('');
                    setInvaild(true);
                }, 500);
            }
        }
    };
    const onClick = (e) => {
        dispatch(removeTag({ tag: e }));
    };
    const { themeData } = useTypedSelector(themeDataState);

    return (
        <>
            {themeData == 'white' ? (
                <S.Tag>
                    {tag.map((e) => (
                        <TagItem onClick={() => onClick(e)} tag={e} />
                    ))}
                    {invalid ? (
                        <S.TagInput placeholder="태그를 입력해주세요" onChange={onChange} value={oneTag} onKeyPress={onKeyPress} />
                    ) : (
                        <S.TagInput
                            placeholder="태그를 입력해주세요"
                            onChange={onChange}
                            value={oneTag}
                            onKeyPress={onKeyPress}
                            className="error"
                        />
                    )}
                </S.Tag>
            ) : (
                <S.Tag className="check">
                    {tag.map((e) => (
                        <TagItem onClick={() => onClick(e)} tag={e} />
                    ))}
                    {invalid ? (
                        <S.TagInput
                            placeholder="태그를 입력해주세요"
                            onChange={onChange}
                            value={oneTag}
                            onKeyPress={onKeyPress}
                            className="check"
                        />
                    ) : (
                        <S.TagInput
                            placeholder="태그를 입력해주세요"
                            onChange={onChange}
                            value={oneTag}
                            onKeyPress={onKeyPress}
                            className="error check"
                        />
                    )}
                </S.Tag>
            )}
        </>
    );
};
export default Tag;
