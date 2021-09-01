import axios from 'axios';
import React from 'react';
import { useRef, useState, useMemo } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { editorState, updateText } from '../../features/editor/editorSlice';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import './style.css';
import * as S from './styles';
const Editor = (props: any) => {
    const QuillRef = useRef<ReactQuill>();
    const { text, title } = useTypedSelector(editorState);
    const dispatch = useAppDispatch();
    const imageChange = (url: string) => {
        const range = QuillRef.current?.getEditor().getSelection()?.index;
        if (range !== null && range !== undefined) {
            let quill = QuillRef.current?.getEditor();

            quill?.setSelection(range, 1);

            quill?.clipboard.dangerouslyPasteHTML(range, ` <img src=${url} alt="이미지 태그가 삽입됩니다." style="overfit: cover;" /> `);
        }
    };
    const imageHandler = () => {
        const input = document.createElement('input');
        const formData = new FormData();
        let url = '';

        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files;
            if (file !== null) {
                formData.append('image', file[0]);

                try {
                    const res = (await axios.post(process.env.BASE_URL + '/upload/single', formData)).data;
                    url = process.env.S3_URL + res.image;
                    //url = 'https://toinin1234.s3.ap-northeast-2.amazonaws.com/dc303730-b7ed-4e27-a22f-8ba172ec51a6.png';
                    setTimeout(() => imageChange(url), 1000);
                    console.log(url);
                } catch (error) {
                    console.log(error);
                }
            }
        };
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ font: ['serif', 'monospace', 'sansserif'] }],
                    [{ size: ['small', false, 'large', 'huge'] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ color: [] }],

                    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }, { align: [] }],
                    ['image', 'video'],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
        }),
        []
    );
    const handleProcedureContentChange = (content, delta, source, editor) => {
        const text = editor.getHTML();
        dispatch(updateText({ text: text }));
    };

    return (
        <S.Wrapper>
            {props.check ? (
                <ReactQuill
                    ref={(element) => {
                        if (element !== null) {
                            QuillRef.current = element;
                        }
                    }}
                    value={text}
                    onChange={handleProcedureContentChange}
                    modules={modules}
                    theme="snow"
                    placeholder="내용을 입력해주세요."
                />
            ) : (
                <ReactQuill
                    ref={(element) => {
                        if (element !== null) {
                            QuillRef.current = element;
                        }
                    }}
                    value={text}
                    onChange={handleProcedureContentChange}
                    modules={modules}
                    theme="snow"
                    placeholder="내용을 입력해주세요."
                />
            )}
        </S.Wrapper>
    );
};
export default Editor;
