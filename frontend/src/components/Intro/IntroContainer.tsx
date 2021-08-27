import React, { useState } from 'react';
import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './styles.css';

import SwiperCore, { Pagination, Autoplay, Controller } from 'swiper';

SwiperCore.use([Autoplay, Pagination, Controller]);

const slider = [];
for (let i = 0; i < 5; i += 1)
    slider.push(
        <SwiperSlide key={`slide-${i}`}>
            <img
                src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg"
                style={{ listStyle: 'none', position: 'static', display: 'block', width: '500px', height: '300px' }}
                alt={`Slide ${i}`}
            />
        </SwiperSlide>
    );

const IntroContainer = () => {
    const [firstSwiper, setFirstSwiper] = useState(null);

    return (
        <S.Intro>
            <S.Wrapper>
                <S.InformationWrapper>
                    <S.Tit_intro>안녕하세요</S.Tit_intro>
                    <S.IntroduceWrapper>
                        <S.MyImage>
                            <S.Image src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                        </S.MyImage>
                        <S.MyIntrouce>
                            <S.MyName>강아지</S.MyName>
                            <S.MyThink>왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈</S.MyThink>
                            <S.MyThink>왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈</S.MyThink>
                        </S.MyIntrouce>
                    </S.IntroduceWrapper>
                </S.InformationWrapper>
            </S.Wrapper>

            <S.SwiperWrapper>
                <Swiper
                    style={{ width: '600px' }}
                    onSwiper={setFirstSwiper}
                    controller={{ control: firstSwiper }}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    className="mySwiper"
                >
                    {slider}
                </Swiper>
            </S.SwiperWrapper>
        </S.Intro>
    );
};
export default IntroContainer;
