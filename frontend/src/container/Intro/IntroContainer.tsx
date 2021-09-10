import React from 'react';
import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './styles.css';
import SwiperCore, { Pagination, Autoplay, Controller } from 'swiper';

SwiperCore.use([Autoplay, Pagination, Controller]);

const slider = [
    <SwiperSlide key={0}>
        <img
            src="../../../public/garbageImage2.jpg"
            style={{ listStyle: 'none', position: 'static', display: 'block', width: '500px', height: '300px', objectFit: 'cover' }}
            alt={`Slide ${1}`}
        />
    </SwiperSlide>,
    <SwiperSlide key={2}>
        <img
            src="../../../public/garbageImage3.jpg"
            style={{ listStyle: 'none', position: 'static', display: 'block', width: '500px', height: '300px', objectFit: 'cover' }}
            alt={`Slide ${2}`}
        />
    </SwiperSlide>,
    <SwiperSlide key={3}>
        <img
            src="../../../public/spring.svg"
            style={{ listStyle: 'none', position: 'static', display: 'block', width: '500px', height: '300px', objectFit: 'cover' }}
            alt={`Slide ${3}`}
        />
    </SwiperSlide>,
    <SwiperSlide key={4}>
        <img
            src="../../../public/javascript.png"
            style={{ listStyle: 'none', position: 'static', display: 'block', width: '500px', height: '300px', objectFit: 'cover' }}
            alt={`Slide ${4}`}
        />
    </SwiperSlide>,
];

const IntroContainer = () => {
    return (
        <S.Intro>
            <S.IntroduceWrapper>
                <S.Tit_intro>안녕하세요</S.Tit_intro>
                <S.MyInformationWrapper>
                    <S.MyImage>
                        <S.Image src="/public/myImage.jpg" />
                    </S.MyImage>
                    <S.MyIntrouce>
                        <S.MyName>안영준</S.MyName>
                        <S.MyThink>도움이 되기 위해서 열심히 공부중인 개발자입니다.</S.MyThink>
                        <S.MyThink>자바와 자바스크립트를 기반으로 둔 개발자입니다.</S.MyThink>
                    </S.MyIntrouce>
                </S.MyInformationWrapper>
            </S.IntroduceWrapper>

            <S.SwiperWrapper>
                <Swiper
                    style={{ width: '600px' }}
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
