import React, { useState } from 'react';
import Post from './Post/Post';
import Series from './Series/Series';
import * as S from './styles';
const MainPostContainer = (props: any) => {
    const [isPost, setIsPost] = useState(true);
    const upadatePost = () => {
        setIsPost(true);
    };
    const upadateProject = () => {
        setIsPost(false);
    };
    return (
        <>
            {props.check ? (
                <S.MainPostWrapper className="check">
                    <S.PageNationWrapper>
                        <S.PageFont className="check" isPost={isPost} onClick={upadatePost}>
                            Post
                        </S.PageFont>
                        <S.PageFont className="check" isPost={!isPost} onClick={upadateProject}>
                            Series
                        </S.PageFont>
                    </S.PageNationWrapper>
                    {isPost ? <Post check={true} scrollPosition={props.scrollPosition} /> : <Series />}
                </S.MainPostWrapper>
            ) : (
                <S.MainPostWrapper>
                    <S.PageNationWrapper>
                        <S.PageFont isPost={isPost} onClick={upadatePost}>
                            Post
                        </S.PageFont>
                        <S.PageFont isPost={!isPost} onClick={upadateProject}>
                            Series
                        </S.PageFont>
                    </S.PageNationWrapper>
                    {isPost ? <Post check={false} scrollPosition={props.scrollPosition} /> : <Series />}
                </S.MainPostWrapper>
            )}
        </>
    );
};

export default MainPostContainer;
