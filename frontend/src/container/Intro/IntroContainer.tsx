import React from 'react';
import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './styles.css';
import { Spring, JavaScript, Garabageimage2, Coffee } from '../../asset';
import SwiperCore, { Pagination, Autoplay, Controller } from 'swiper';
import MyInformation from '../../components/myInforMation/MyInformation';
import { useTypedSelector } from '../../module/store';
import { themeDataState } from '../../features/theme/themeSlice';

SwiperCore.use([Autoplay, Pagination, Controller]);

const slider = [
    <SwiperSlide key={0}>
        <img
            src={Garabageimage2}
            style={{ listStyle: 'none', position: 'static', display: 'block', width: '500px', height: '300px', objectFit: 'cover' }}
            alt={`Slide ${1}`}
        />
    </SwiperSlide>,
    <SwiperSlide key={2}>
        <img
            src={Coffee}
            style={{ listStyle: 'none', position: 'static', display: 'block', width: '500px', height: '300px', objectFit: 'cover' }}
            alt={`Slide ${2}`}
        />
    </SwiperSlide>,
    <SwiperSlide key={3}>
        <img
            src={Spring}
            style={{ listStyle: 'none', position: 'static', display: 'block', width: '500px', height: '300px', objectFit: 'cover' }}
            alt={`Slide ${3}`}
        />
    </SwiperSlide>,
    <SwiperSlide key={4}>
        <img
            src={JavaScript}
            style={{ listStyle: 'none', position: 'static', display: 'block', width: '500px', height: '300px', objectFit: 'cover' }}
            alt={`Slide ${4}`}
        />
    </SwiperSlide>,
];
const { themeData } = useTypedSelector(themeDataState);

const IntroContainer = () => {
    return (
        <>
            {themeData != 'dark' ? (
                <S.Intro>
                    <S.IntroduceWrapper>
                        <S.Tit_intro>안녕하세요</S.Tit_intro>
                        <MyInformation check={true} />
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
            ) : (
                <S.Intro className="dark">
                    <S.IntroduceWrapper>
                        <S.Tit_intro>안녕하세요</S.Tit_intro>
                        <MyInformation check={true} />
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
            )}
        </>
    );
};
export default IntroContainer;
