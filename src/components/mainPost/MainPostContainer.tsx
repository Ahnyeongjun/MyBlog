import React, { useState } from "react";
import * as S from "./styles";
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
            <S.PageFont
              className="check"
              isPost={!isPost}
              onClick={upadateProject}
            >
              Series
            </S.PageFont>
            {/* {isTrending == true ? <S.TernWrapper /> : null} */}
          </S.PageNationWrapper>
          <S.MainPostItemWrapper className="check">
            <S.MainPostImg src="http://picsum.photos/id/1/500/300" />
            <S.ContentWrapper>
              <S.FeautredTitleWrapper>
                <S.FeautredTitle>강아지강아지강아지강아지</S.FeautredTitle>
              </S.FeautredTitleWrapper>
              <S.FeautredContent>
                왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
              </S.FeautredContent>
            </S.ContentWrapper>
          </S.MainPostItemWrapper>
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
            {/* {isTrending == true ? <S.TernWrapper /> : null} */}
          </S.PageNationWrapper>
          <S.MainPostItemWrapper>
            <S.MainPostImg src="http://picsum.photos/id/1/500/300" />
            <S.ContentWrapper>
              <S.FeautredTitleWrapper>
                <S.FeautredTitle>강아지강아지강아지강아지</S.FeautredTitle>
              </S.FeautredTitleWrapper>
              <S.FeautredContent>
                왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
              </S.FeautredContent>
            </S.ContentWrapper>
          </S.MainPostItemWrapper>
        </S.MainPostWrapper>
      )}
    </>
  );
};

export default MainPostContainer;
