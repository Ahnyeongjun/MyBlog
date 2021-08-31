import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../features/auth/authSlice';
import { User } from '../../features/auth/authType';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import * as S from './styles';
// import Abd from './abd';
import Slider from './slider';
import './styles.scss';
import { editorState, getPost } from '../../features/editor/editorSlice';
const AdminPage = () => {
    const dispatch = useAppDispatch();
    useMemo(() => {
        dispatch(getPost({ page: 1, pageSize: 3 }));
    }, []);
    const { postData } = useTypedSelector(editorState);

    return (
        <>
            <Slider />
            {/* <Abd postData={postData} /> */}
        </>
    );
};
export default AdminPage;
