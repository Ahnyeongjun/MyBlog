import React, { useCallback, useRef, useState } from 'react';
import * as S from './styles';
const Accordion = (props: any) => {
    const [isCollapse, setIsCollapse] = useState(false);
    const parentRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const handleButtonClick = useCallback(
        (event) => {
            event.stopPropagation();
            if (parentRef.current === null || childRef.current === null) {
                return;
            }
            if (parentRef.current.clientHeight > 0) {
                parentRef.current.style.height = '0';
                parentRef.current.style.background = 'white';
            } else {
                parentRef.current.style.height = `${childRef.current.clientHeight}px`;
            }
            setIsCollapse(!isCollapse);
        },
        [isCollapse]
    );

    return (
        <>
            {props.check ? (
                <S.AccordionWrapper>
                    <S.ItemWrapper>
                        <S.HeaderWrapper>
                            <S.Header onClick={handleButtonClick} className="check">
                                미완성(sample)
                            </S.Header>
                        </S.HeaderWrapper>
                        <S.ParentsContentsWrapper ref={parentRef}>
                            <S.ChildContentsWrapper ref={childRef}>
                                <S.ContentWrapper className="check">
                                    <S.Img src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                                    <S.Content>
                                        페이지를 아직 만들지 않았습니다. 페이지를 아직 만들지 않았습니다. 페이지를 아직 만들지 않았습니다.
                                    </S.Content>
                                </S.ContentWrapper>
                            </S.ChildContentsWrapper>
                        </S.ParentsContentsWrapper>
                    </S.ItemWrapper>{' '}
                </S.AccordionWrapper>
            ) : (
                <S.AccordionWrapper>
                    <S.ItemWrapper>
                        <S.HeaderWrapper>
                            <S.Header onClick={handleButtonClick}>미완성(sample)</S.Header>
                        </S.HeaderWrapper>
                        <S.ParentsContentsWrapper ref={parentRef}>
                            <S.ChildContentsWrapper ref={childRef}>
                                <S.ContentWrapper>
                                    <S.Img src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                                    <S.Content>
                                        페이지를 아직 만들지 않았습니다. 페이지를 아직 만들지 않았습니다. 페이지를 아직 만들지 않았습니다.
                                    </S.Content>
                                </S.ContentWrapper>
                            </S.ChildContentsWrapper>
                        </S.ParentsContentsWrapper>
                    </S.ItemWrapper>{' '}
                </S.AccordionWrapper>
            )}
        </>
    );
};

export default Accordion;
