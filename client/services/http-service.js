const domain = 'http://api.wika.site/';

/**
 * @param route {string}
 * @param params {object}
 * @returns {Promise<*>} объект-ответ сервера
 */
export const get = async (route, params) => {
    params = params || {};

    let addr = domain + route;

    const query_arr = [];

    for (const key in params)
        query_arr.push(`${key}=${params[key]}`);

    addr += '?';
    addr += query_arr.join('&');

    const raw = await fetch(addr);

    return raw.json();
};

/**
 * @param route {string}
 * @param data {object}
 * @returns {Promise<*>} объект-ответ сервера
 */
export const post = async (route, data) => {
    const body = new FormData;

    const addr = domain + route;

    for (const key in data)
        body.append(key, data[key]);

    const params = {
        method: 'POST',
        body,
    };

    const raw = await fetch(addr, params);

    return raw.json();
};
