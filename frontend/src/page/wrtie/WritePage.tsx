import HeaderContainer from '../../container/header/HeaderContainer';
import React, { useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import { themeDataState, toggleTheme } from '../../features/theme/themeSlice';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import Editor from '../../components/Editor/editor';
import Title from '../../components/writePage_title/title';
import Tag from '../../components/writePage_tag/Tag';
import { checkIsLogin } from '../../utils/authUtils';
import { editorState, updateMainContent, updateMainImageUrl, updateSeriesName, uploadPost } from '../../features/editor/editorSlice';
import axios from 'axios';

const WritePage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isLastSave, setIsLastSave] = useState(false);
    const { themeData } = useTypedSelector(themeDataState);
    const { text, title, tag, mainContent, mainImageURL, seriesName } = useTypedSelector(editorState);
    useEffect(() => {
        checkIsLogin();
    }, []);
    useMemo(() => {
        document.title = `Write | YoungJun`;
    }, []);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.body.scrollTop);
    };

    const dispatch = useAppDispatch();

    const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let initTheme = isBrowserDarkMode ? 'black' : 'white';

    const localSettingTheme = localStorage.getItem('theme');

    if (localSettingTheme) {
        initTheme = localSettingTheme;
    }

    const theme = initTheme == 'white' ? 'white' : 'black';

    dispatch(toggleTheme({ themeType: theme }));

    const onIsLastSaveClick = () => {
        dispatch(updateMainContent({ mainContent: text }));
        setIsLastSave(!isLastSave);
    };

    const onSaveClick = () => {
        dispatch(
            uploadPost({ title: title, tag: tag, text: text, mainContent: mainContent, mainImageURL: mainImageURL, seriesName: seriesName })
        );
    };

    const chooseFile = () => {
        document.getElementById('fileInput').click();
    };

    const inputOnChange = async (e) => {
        const img = e.target.files[0];
        const formData = new FormData();
        formData.append('image', img);

        const headers = {
            Authorization: localStorage.getItem('accessToken'),
        };
        const res: any = (await axios.post(process.env.BASE_URL + '/upload/single', formData, { headers })).data;
        const url = process.env.S3_URL + res.image;
        setTimeout(() => dispatch(updateMainImageUrl({ mainImageURL: url })), 1000);
    };

    const mainContentOnChange = (e) => {
        const { value } = e.target;
        dispatch(updateMainContent({ mainContent: value }));
    };
    const seriesNameOnchange = (e) => {
        const { value } = e.target;
        dispatch(updateSeriesName({ seriesName: value }));
    };
    return (
        <>
            {themeData == 'white' ? (
                <S.WriteWrapper>
                    <HeaderContainer scrollPosition={scrollPosition} />
                    {isLastSave ? (
                        <S.LastSavePageWrapper>
                            <S.LastSavePage>
                                <S.PostPreview>포스트 미리보기</S.PostPreview>
                                <div style={{ height: '0px', overflow: 'hidden', width: '0px' }}>
                                    <input type="file" id="fileInput" name="fileInput" onChange={inputOnChange} />
                                </div>
                                {mainImageURL == '' ? (
                                    <S.PostPreviewImageBtnWrapper>
                                        <S.PostUploadBtn onClick={chooseFile}>업로드</S.PostUploadBtn>
                                    </S.PostPreviewImageBtnWrapper>
                                ) : (
                                    <>
                                        <S.PostPreviewImage src={mainImageURL} />
                                        <S.PostPreviewImageOptionBtnWrapper>
                                            <S.PostPreviewOptionbtn onClick={chooseFile}>재업로드</S.PostPreviewOptionbtn>
                                            <S.PostPreviewOptionbtn onClick={() => dispatch(updateMainImageUrl({ mainImageURL: '' }))}>
                                                삭제
                                            </S.PostPreviewOptionbtn>
                                        </S.PostPreviewImageOptionBtnWrapper>
                                    </>
                                )}
                                <S.PostPreviewTitle>{title || '제목'}</S.PostPreviewTitle>
                                <S.PostPreviewContent onChange={mainContentOnChange} value={mainContent}>
                                    {text || '내용'}
                                </S.PostPreviewContent>
                                <S.PostPreviewTitle>시리즈 설정</S.PostPreviewTitle>
                                <S.Series placeholder="시리즈에 추가하기" onChange={seriesNameOnchange} value={seriesName}></S.Series>
                                <S.LastBtnWrapper>
                                    <S.Btn onClick={onIsLastSaveClick}>돌아가기</S.Btn>
                                    <S.Btn onClick={onSaveClick}>저장하기</S.Btn>
                                </S.LastBtnWrapper>
                            </S.LastSavePage>
                        </S.LastSavePageWrapper>
                    ) : (
                        <S.LastSavePageWrapper className="delete" />
                    )}
                    <S.TitleWrapper>
                        <Title />
                    </S.TitleWrapper>
                    <S.TagWrapper>
                        <Tag />
                    </S.TagWrapper>
                    <S.EditorWrapper>
                        <Editor />
                    </S.EditorWrapper>
                    <S.Bottom>
                        <S.Btn onClick={onIsLastSaveClick}>저장하기</S.Btn>
                    </S.Bottom>
                </S.WriteWrapper>
            ) : (
                <S.WriteWrapper className="check">
                    <HeaderContainer check={true} scrollPosition={scrollPosition} />
                    {isLastSave ? (
                        <S.LastSavePageWrapper>
                            <S.LastSavePage>
                                <S.PostPreview>포스트 미리보기</S.PostPreview>
                                <div style={{ height: '0px', overflow: 'hidden', width: '0px' }}>
                                    <input type="file" id="fileInput" name="fileInput" onChange={inputOnChange} />
                                </div>
                                {mainImageURL == '' ? (
                                    <S.PostPreviewImageBtnWrapper>
                                        <S.PostUploadBtn onClick={chooseFile}>업로드</S.PostUploadBtn>
                                    </S.PostPreviewImageBtnWrapper>
                                ) : (
                                    <>
                                        <S.PostPreviewImage src={mainImageURL} />
                                        <S.PostPreviewImageOptionBtnWrapper>
                                            <S.PostPreviewOptionbtn onClick={chooseFile}>재업로드</S.PostPreviewOptionbtn>
                                            <S.PostPreviewOptionbtn onClick={() => dispatch(updateMainImageUrl({ mainImageURL: '' }))}>
                                                삭제
                                            </S.PostPreviewOptionbtn>
                                        </S.PostPreviewImageOptionBtnWrapper>
                                    </>
                                )}
                                <S.PostPreviewTitle>{title || '제목'}</S.PostPreviewTitle>
                                <S.PostPreviewContent onChange={mainContentOnChange} value={mainContent}>
                                    {text || '내용'}
                                </S.PostPreviewContent>
                                <S.LastBtnWrapper>
                                    <S.Btn onClick={onIsLastSaveClick}>돌아가기</S.Btn>
                                    <S.Btn onClick={onSaveClick}>저장하기</S.Btn>
                                </S.LastBtnWrapper>
                            </S.LastSavePage>
                        </S.LastSavePageWrapper>
                    ) : (
                        <S.LastSavePageWrapper className="delete" />
                    )}
                    <S.TitleWrapper>
                        <Title />
                    </S.TitleWrapper>
                    <S.TagWrapper>
                        <Tag />
                    </S.TagWrapper>
                    <S.EditorWrapper>
                        <Editor check={true} />
                    </S.EditorWrapper>
                    <S.Bottom>
                        <S.Btn onClick={onIsLastSaveClick} className="check">
                            저장하기
                        </S.Btn>
                    </S.Bottom>
                </S.WriteWrapper>
            )}
        </>
    );
};
export default WritePage;
