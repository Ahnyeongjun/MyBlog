import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import * as S from './styles';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './feautredStyles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { useDispatch } from 'react-redux';
import { editorState, getPost } from '../../features/editor/editorSlice';
import { useTypedSelector } from '../../module/store';
import 'swiper/swiper.scss';

SwiperCore.use([Pagination, Navigation]);

const FeautredContainer = (props) => {
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
        dispatch(getPost({ page: 1, pageSize: 9 }));
        console.log('Sss');
    }, []);

    const { postData } = useTypedSelector(editorState);

    const slider = [];
    const darkSlider = [];
    for (let i = 0; i < postData.length; i += 1) {
        slider.push(
            <SwiperSlide key={`slide-${i}`}>
                <S.FeaturedItemWrapper>
                    <S.FeautredImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                    <S.FeautredContentWrapper>
                        <S.FeautredTitle>{postData[i].title}</S.FeautredTitle>
                        <S.FeautredContent>{postData[i].text}</S.FeautredContent>
                    </S.FeautredContentWrapper>
                </S.FeaturedItemWrapper>
            </SwiperSlide>
        );
        darkSlider.push(
            <SwiperSlide key={`slide-${i}`}>
                <S.FeaturedItemWrapper className="check">
                    <S.FeautredImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                    <S.FeautredContentWrapper>
                        <S.FeautredTitle>{postData[i].title}</S.FeautredTitle>
                        <S.FeautredContent>{postData[i].text}</S.FeautredContent>
                    </S.FeautredContentWrapper>
                </S.FeaturedItemWrapper>
            </SwiperSlide>
        );
    }

    return (
        <>
            {props.check ? (
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
                            <S.PageNationBtn className="check">{'<'}</S.PageNationBtn>
                            <S.PageNationBtn className="check">{'>'}</S.PageNationBtn>
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
                                {isTrending ? <div>개발 중</div> : darkSlider}
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
                            <S.PageNationBtn> {'<'} </S.PageNationBtn>
                            <S.PageNationBtn>{'>'}</S.PageNationBtn>
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
            )}{' '}
        </>
    );
};
export default FeautredContainer;
