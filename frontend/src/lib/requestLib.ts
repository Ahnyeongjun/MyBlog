import axios from 'axios';
axios.defaults.withCredentials = true;
export const methodType = {
    POST: 'post',
    PUT: 'put',
    GET: 'get',
    DELETE: 'delete',
};

const BASE_URL = process.env.BASE_URL;

export const requestApiWithBody = async ({ httpMethod, requestUrl, body, headers }) => {
    try {
        const res = await axios[httpMethod](BASE_URL + requestUrl, body, { headers });
        console.log(res);
        return res;
    } catch (error) {
        throw error.response;
    }
};

export const requestApi = async ({ httpMethod, requestUrl, headers }) => {
    console.log(BASE_URL);
    try {
        const res = await axios[httpMethod](
            BASE_URL + requestUrl,
            {
                headers,
                credentials: 'same-origin',
            },
            { withCredentials: true }
        );
        return res;
    } catch (error) {
        throw error.response;
    }
};
