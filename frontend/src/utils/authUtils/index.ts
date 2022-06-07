import { methodType, requestApi } from "../../lib/requestLib";
import { call } from "redux-saga/effects";
import { ACCOUNT_URL } from "../../lib/apiUrlLib";

export const checkIsLogin = async () => {
    try {
        const accessToken = encodeURI(localStorage.getItem('accessToken'));
        console.log(accessToken);
        // if (accessToken) {
        //     const httpMethod = methodType.POST;
        //     const requestUrl = ACCOUNT_URL.checkToken();
        //     const body = "";
        //     const headers  =
        //     const res = call(requestApiWithBody, { httpMethod, requestUrl, body, headers });
        // }

        if (!accessToken) {
            alert('로그인이 되어있지 않습니다.');
            location.href = '/';
            throw Error('There is no access token.');
        } else{            
            const requestUrl = ACCOUNT_URL.checkToken();
            const httpMethod = methodType.GET;
            const headers = {"Authorization":accessToken}
            try{
                const res =  await requestApi({httpMethod, requestUrl, headers });
                if(res.status != 200){
                    dropToken(res);
                }
            }
            catch {
                dropToken();
            }
        }

        return true;
    } catch (error) {
        return false;
    }
};

const dropToken = (res?: Object) => {
    if(!res){
        localStorage.removeItem('accessToken');
        alert('옳지않은 token 입니다.');
        location.href = '/';
        throw Error('There is no access token.');
    }
}

export const logout = () => {
    localStorage.removeItem('accessToken');
    alert('로그아웃 되었습니다.');
    location.href = '/';
};
