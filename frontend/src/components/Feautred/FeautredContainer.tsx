import React, { useState } from 'react';
import * as S from './styles';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './feautredStyles.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

const FeautredContainer = (props: any) => {
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
                            <S.PageNationBtn className="check"> {'<'} </S.PageNationBtn>
                            <S.PageNationBtn className="check">{'>'}</S.PageNationBtn>
                            {isExpend == true ? (
                                <S.PageNationBtn onClick={updateIsExpend}>{'-'}</S.PageNationBtn>
                            ) : (
                                <S.PageNationBtn onClick={updateIsExpend}>{'+'}</S.PageNationBtn>
                            )}
                        </S.PageNationBtnWrapper>
                    </S.PageWrapper>
                    {
                        isExpend == true ? (
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
                                    <SwiperSlide>
                                        <S.FeaturedItemWrapper className="check">
                                            <S.FeautredImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                                            <S.FeautredContentWrapper>
                                                <S.FeautredTitle>강아지강아지강아지강아지</S.FeautredTitle>
                                                <S.FeautredContent>왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈</S.FeautredContent>
                                            </S.FeautredContentWrapper>
                                        </S.FeaturedItemWrapper>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {' '}
                                        <S.FeaturedItemWrapper>
                                            <S.FeautredImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                                            <S.FeautredContentWrapper>
                                                <S.FeautredTitle>강아지강아지강아지강아지</S.FeautredTitle>
                                                <S.FeautredContent>왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈</S.FeautredContent>
                                            </S.FeautredContentWrapper>
                                        </S.FeaturedItemWrapper>
                                    </SwiperSlide>
                                    <SwiperSlide>Slide 3</SwiperSlide>
                                    <SwiperSlide>Slide 4</SwiperSlide>
                                    <SwiperSlide>Slide 5</SwiperSlide>
                                    <SwiperSlide>Slide 6</SwiperSlide>
                                    <SwiperSlide>Slide 7</SwiperSlide>
                                    <SwiperSlide>Slide 8</SwiperSlide>
                                    <SwiperSlide>Slide 9</SwiperSlide>
                                </Swiper>
                            </S.FeaturedWrapper>
                        )
                        // (
                        //   <S.FeaturedWrapper>
                        // <S.FeaturedItemWrapper>
                        //                         <S.FeautredImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />

                        //   <S.FeautredContentWrapper>
                        //     <S.FeautredTitle>강아지강아지강아지강아지</S.FeautredTitle>
                        //     <S.FeautredContent>
                        //       왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
                        //     </S.FeautredContent>
                        //   </S.FeautredContentWrapper>
                        // </S.FeaturedItemWrapper>
                        //     <S.FeaturedItemWrapper>
                        //                          <S.FeautredImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />

                        //       <S.FeautredContentWrapper>
                        //         <S.FeautredTitle>강아지강아지강아지강아지</S.FeautredTitle>
                        //         <S.FeautredContent>
                        //           왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
                        //         </S.FeautredContent>
                        //       </S.FeautredContentWrapper>
                        //     </S.FeaturedItemWrapper>
                        //     <S.FeaturedItemWrapper>
                        //                            <S.FeautredImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />

                        //       <S.FeautredContentWrapper>
                        //         <S.FeautredTitle>강아지강아지강아지강아지</S.FeautredTitle>
                        //         <S.FeautredContent>
                        //           왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
                        //         </S.FeautredContent>
                        //       </S.FeautredContentWrapper>
                        //     </S.FeaturedItemWrapper>
                        //   </S.FeaturedWrapper>
                        // )
                    }
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
                    {
                        isExpend == true ? (
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
                                    <SwiperSlide>
                                        <S.FeaturedItemWrapper>
                                            <S.FeautredImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                                            <S.FeautredContentWrapper>
                                                <S.FeautredTitle>강아지강아지강아지강아지</S.FeautredTitle>
                                                <S.FeautredContent>왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈</S.FeautredContent>
                                            </S.FeautredContentWrapper>
                                        </S.FeaturedItemWrapper>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {' '}
                                        <S.FeaturedItemWrapper>
                                            <S.FeautredImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                                            <S.FeautredContentWrapper>
                                                <S.FeautredTitle>강아지강아지강아지강아지</S.FeautredTitle>
                                                <S.FeautredContent>왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈</S.FeautredContent>
                                            </S.FeautredContentWrapper>
                                        </S.FeaturedItemWrapper>
                                    </SwiperSlide>
                                    <SwiperSlide>Slide 3</SwiperSlide>
                                    <SwiperSlide>Slide 4</SwiperSlide>
                                    <SwiperSlide>Slide 5</SwiperSlide>
                                    <SwiperSlide>Slide 6</SwiperSlide>
                                    <SwiperSlide>Slide 7</SwiperSlide>
                                    <SwiperSlide>Slide 8</SwiperSlide>
                                    <SwiperSlide>Slide 9</SwiperSlide>
                                </Swiper>
                            </S.FeaturedWrapper>
                        )
                        // (
                        //   <S.FeaturedWrapper>
                        // <S.FeaturedItemWrapper>
                        //                         <S.FeautredImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />

                        //   <S.FeautredContentWrapper>
                        //     <S.FeautredTitle>강아지강아지강아지강아지</S.FeautredTitle>
                        //     <S.FeautredContent>
                        //       왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
                        //     </S.FeautredContent>
                        //   </S.FeautredContentWrapper>
                        // </S.FeaturedItemWrapper>
                        //     <S.FeaturedItemWrapper>
                        //                            <S.FeautredImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />

                        //       <S.FeautredContentWrapper>
                        //         <S.FeautredTitle>강아지강아지강아지강아지</S.FeautredTitle>
                        //         <S.FeautredContent>
                        //           왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
                        //         </S.FeautredContent>
                        //       </S.FeautredContentWrapper>
                        //     </S.FeaturedItemWrapper>
                        //     <S.FeaturedItemWrapper>
                        //                            <S.FeautredImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />

                        //       <S.FeautredContentWrapper>
                        //         <S.FeautredTitle>강아지강아지강아지강아지</S.FeautredTitle>
                        //         <S.FeautredContent>
                        //           왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈
                        //         </S.FeautredContent>
                        //       </S.FeautredContentWrapper>
                        //     </S.FeaturedItemWrapper>
                        //   </S.FeaturedWrapper>
                        // )
                    }
                </S.Featured>
            )}{' '}
        </>
    );
};
export default FeautredContainer;
