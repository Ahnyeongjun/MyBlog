import { isNullOfUndefined } from '../utils/stringUtils';

const getUrlWithQuery = ({ queryObject, defaultURL, queryNameArr }) => {
    const URLArr = [defaultURL];

    for (const queryName of queryNameArr) {
        if (!isNullOfUndefined(queryObject[queryName])) {
            if (URLArr.length === 1) {
                URLArr.push('?');
            } else {
                URLArr.push('&');
            }

            URLArr.push(`${queryName}=${queryObject[queryName]}`);
        }
    }

    const resultUrl = URLArr.join('');

    return resultUrl;
};
export const ACCOUNT_URL = {
    checkToken: function (): string {
        return `/auth/token`;
    },
    login: function (): string {
        return `/auth/login`;
    },
};

export const BLOG_URL = {
    blog: function (): string {
        return '/blog';
    },
    pageNation: function (queryObject): string {
        const defaultURL = '/blog/post';
        const queryNameArr = ['page', 'pageSize'];
        const resultURL = getUrlWithQuery({ queryObject, defaultURL, queryNameArr });

        return resultURL;
    },
};
