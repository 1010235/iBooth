import axios from 'axios';

const SERVER_URL = 'http://1010235.ap-northeast-2.elasticbeanstalk.com'

export function getBeeperList(number){
    return axios.get(`${SERVER_URL}/list/${number}`);
}

export function getBeeperNewList(number){
    return axios.get(`${SERVER_URL}/list/${number}/new`);
}

export function sendBeep(number){
    return axios.post(`${SERVER_URL}/send`, {
        number : parseInt(number),
        msg : 1005,
    });
}
