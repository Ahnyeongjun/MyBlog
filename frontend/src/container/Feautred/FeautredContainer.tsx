import React, { useMemo, useState } from 'react';
import * as S from './styles';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './feautredStyles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../module/store';
import 'swiper/swiper.scss';
import { themeDataState } from '../../features/theme/themeSlice';
import { getPagenationFeautredPostList, postListDateState } from '../../features/postList/postListSlice';

SwiperCore.use([Pagination, Navigation]);

const FeautredContainer = () => {
    const [isTrending, setIsTrending] = useState(false);
    const [isExpend, setIsExpend] = useState(false);

    const upadateIsTrending = () => {
        setIsTrending(true);
    };
    const upadateIsFeautred = () => {
        setIsTrending(false);
    };

    const updateIsExpend = () => {
        setIsExpend(!isExpend);
    };

    const dispatch = useDispatch();

    useMemo(() => {
        dispatch(getPagenationFeautredPostList({ page: 1, pageSize: 6, type: 'feautred' }));
    }, []);

    const { FeautredPostList } = useTypedSelector(postListDateState);
    console.log(FeautredPostList);
    const { themeData } = useTypedSelector(themeDataState);

    const onClick = (searchUrl: string) => {
        location.href = `/post/${searchUrl}`;
    };

    const slider = [];

    if (themeData == 'white' && FeautredPostList)
        for (let i = 0; i < FeautredPostList.length; i += 1)
            slider.push(
                <SwiperSlide key={`slide-${FeautredPostList[i].uid}`} onClick={() => onClick(FeautredPostList[i].searchUrl)}>
                    <S.FeaturedItemWrapper>
                        <S.FeautredImg src={FeautredPostList[i].mainImageURL} />
                        <S.FeautredContentWrapper>
                            <S.FeautredTitle>{FeautredPostList[i].title}</S.FeautredTitle>
                            <S.FeautredContent>{FeautredPostList[i].mainContent}</S.FeautredContent>
                        </S.FeautredContentWrapper>
                    </S.FeaturedItemWrapper>
                </SwiperSlide>
            );
    else
        for (let i = 0; i < FeautredPostList.length; i += 1) {
            slider.push(
                <SwiperSlide key={`slide-${FeautredPostList[i].uid}`} onClick={() => onClick(FeautredPostList[i].searchUrl)}>
                    <S.FeaturedItemWrapper className="check">
                        <S.FeautredImg src={FeautredPostList[i].mainImageURL} />
                        <S.FeautredContentWrapper>
                            <S.FeautredTitle>{FeautredPostList[i].title}</S.FeautredTitle>
                            <S.FeautredContent>{FeautredPostList[i].mainContent}</S.FeautredContent>
                        </S.FeautredContentWrapper>
                    </S.FeaturedItemWrapper>
                </SwiperSlide>
            );
        }

    return (
        <>
            {themeData != 'white' ? (
                <S.Featured className="check">
                    <S.PageWrapper>
                        <S.PageNationWrapper>
                            <S.PageFont className="check" isTrending={isTrending} onClick={upadateIsFeautred}>
                                Feautred
                            </S.PageFont>
                            <S.PageFont className="check" isTrending={!isTrending} onClick={upadateIsTrending}>
                                Trending
                            </S.PageFont>
                            {/* {isTrending == true ? <S.TernWrapper /> : null} */}
                        </S.PageNationWrapper>

                        <S.PageNationBtnWrapper>
                            {isExpend == true ? (
                                <S.PageNationBtn onClick={updateIsExpend}>{'-'}</S.PageNationBtn>
                            ) : (
                                <S.PageNationBtn onClick={updateIsExpend}>{'+'}</S.PageNationBtn>
                            )}
                        </S.PageNationBtnWrapper>
                    </S.PageWrapper>
                    {isExpend == true ? (
                        <S.PageNationBtn>{'+'}</S.PageNationBtn>
                    ) : (
                        <S.FeaturedWrapper>
                            <Swiper
                                breakpoints={{
                                    100: {
                                        spaceBetween: 10,
                                        slidesPerView: 1,
                                        slidesPerGroup: 1,
                                    },
                                    700: {
                                        spaceBetween: 40,
                                        slidesPerView: 2,
                                        slidesPerGroup: 2,
                                    },
                                    800: {
                                        spaceBetween: 60,
                                        slidesPerView: 2,
                                        slidesPerGroup: 2,
                                    },
                                    1500: {
                                        spaceBetween: 30,
                                        slidesPerView: 3,
                                        slidesPerGroup: 3,
                                    },
                                }}
                                spaceBetween={40}
                                slidesPerView={3}
                                slidesPerGroup={3}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                navigation={true}
                                className="mySwiper"
                            >
                                {isTrending ? <div>개발 중</div> : slider}
                            </Swiper>
                        </S.FeaturedWrapper>
                    )}
                </S.Featured>
            ) : (
                <S.Featured>
                    <S.PageWrapper>
                        <S.PageNationWrapper>
                            <S.PageFont isTrending={isTrending} onClick={upadateIsFeautred}>
                                Feautred
                            </S.PageFont>
                            <S.PageFont isTrending={!isTrending} onClick={upadateIsTrending}>
                                Trending
                            </S.PageFont>
                            {/* {isTrending == true ? <S.TernWrapper /> : null} */}
                        </S.PageNationWrapper>

                        <S.PageNationBtnWrapper>
                            {isExpend == true ? (
                                <S.PageNationBtn onClick={updateIsExpend}>{'-'}</S.PageNationBtn>
                            ) : (
                                <S.PageNationBtn onClick={updateIsExpend}>{'+'}</S.PageNationBtn>
                            )}
                        </S.PageNationBtnWrapper>
                    </S.PageWrapper>
                    {isExpend == true ? (
                        <S.PageNationBtn>{'+'}</S.PageNationBtn>
                    ) : (
                        <S.FeaturedWrapper>
                            <Swiper
                                breakpoints={{
                                    100: {
                                        spaceBetween: 10,
                                        slidesPerView: 1,
                                        slidesPerGroup: 1,
                                    },
                                    700: {
                                        spaceBetween: 40,
                                        slidesPerView: 2,
                                        slidesPerGroup: 2,
                                    },
                                    800: {
                                        spaceBetween: 50,
                                        slidesPerView: 2,
                                        slidesPerGroup: 2,
                                    },
                                    1500: {
                                        spaceBetween: 30,
                                        slidesPerView: 3,
                                        slidesPerGroup: 3,
                                    },
                                }}
                                spaceBetween={40}
                                slidesPerView={3}
                                slidesPerGroup={3}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                navigation={true}
                                className="mySwiper"
                            >
                                {isTrending ? <div>개발 중</div> : slider}
                            </Swiper>
                        </S.FeaturedWrapper>
                    )}
                </S.Featured>
            )}
        </>
    );
};
export default FeautredContainer;
