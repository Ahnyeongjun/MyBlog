import axios from 'axios';
import React from 'react';
import { useRef, useMemo } from 'react';

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
    const imageChange = (url: any) => {
        const range = QuillRef.current?.getEditor().getSelection()?.index;
        if (range !== null && range !== undefined) {
            let quill = QuillRef.current?.getEditor();

            quill?.setSelection(range, 1);

            quill?.clipboard.dangerouslyPasteHTML(range, ` <img src=${url} alt="이미지 태그가 삽입됩니다." style="overfit: cover;" /> `);
        }
    };
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const imageHandler = () => {
        const input = document.createElement('input');
        const formData = new FormData();
        let url = '';

        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file =await toBase64(input.files[0]);
            setTimeout(() => imageChange(file), 1000);
     
            // S3 저장
            // if (file !== null) {
            //     formData.append('image', file[0]);

            //     try {
            //         const headers = {
            //             Authorization: localStorage.getItem('accessToken'),
            //         };
            //         // const res: any = (await axios.post(process.env.BASE_URL + '/upload/single', formData, { headers })).data;
            //         // url = process.env.S3_URL + res.image;
            //         setTimeout(() => imageChange(url), 1000);
            //     } catch (error) {
            //         console.log(error);
            //     }
            // }
        };
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ font: [] }],
                    [{ size: ['small', false, 'large', 'huge'] }],
                    [{ header: [1, 2, 3, 4, false] }],
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
