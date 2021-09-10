import React, { useState } from 'react';
import { themeDataState } from '../../features/theme/themeSlice';
import { useTypedSelector } from '../../module/store';
import Post from '../../components/mainPost_Post/Post';
import Series from '../../components/mainPost_Series/Series';
import * as S from './styles';
const MainPostContainer = (props: any) => {
    const { themeData } = useTypedSelector(themeDataState);
    const [isPost, setIsPost] = useState(true);
    const upadatePost = () => {
        setIsPost(true);
    };
    const upadateProject = () => {
        setIsPost(false);
    };
    return (
        <>
            {themeData != 'white' ? (
                <S.MainPostWrapper className="check">
                    {props.tagName ? (
                        <Post check={true} scrollPosition={props.scrollPosition} tagName={props.tagName} tagTotal={props.tagTotal} />
                    ) : (
                        <>
                            <S.PageNationWrapper>
                                <S.PageFont isPost={isPost} className="check" onClick={upadatePost}>
                                    Post
                                </S.PageFont>
                                <S.PageFont className="check" isPost={!isPost} onClick={upadateProject}>
                                    Series
                                </S.PageFont>
                            </S.PageNationWrapper>
                            {isPost ? <Post check={true} scrollPosition={props.scrollPosition} /> : <Series check={true} />}
                        </>
                    )}
                </S.MainPostWrapper>
            ) : (
                <S.MainPostWrapper>
                    {props.tagName ? (
                        <Post check={false} scrollPosition={props.scrollPosition} tagName={props.tagName} tagTotal={props.tagTotal} />
                    ) : (
                        <>
                            <S.PageNationWrapper>
                                <S.PageFont isPost={isPost} onClick={upadatePost}>
                                    Post
                                </S.PageFont>
                                <S.PageFont isPost={!isPost} onClick={upadateProject}>
                                    Series
                                </S.PageFont>
                            </S.PageNationWrapper>
                            {isPost ? <Post check={false} scrollPosition={props.scrollPosition} /> : <Series />}
                        </>
                    )}
                </S.MainPostWrapper>
            )}
        </>
    );
};

export default MainPostContainer;
