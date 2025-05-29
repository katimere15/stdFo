import axios from 'axios'

// GET 요청 예시
export const getData = (url, config = {}) => {
    return axios.get(url, config)
}

// POST 요청 예시
export const postData = async (url, data, config = {}) => {
    const res = await axios.post(url, data, config);
    return res.data;
}