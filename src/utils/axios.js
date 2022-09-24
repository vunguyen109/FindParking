import axios from 'axios'
import router from '@/router/index'
import Vue from 'vue';
function apiAxios(method, url, params) {

    const uri = 'https://630ecf7e379256341881c64d.mockapi.io/api/'

    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: uri + url,
            data: method === 'POST' ? params : null,
            params: method === 'GET' ? params : null,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                'Content-Type': 'application/json;charset=UTF-8/multipart/form-data',
                'token': window.localStorage.getItem('token'),
            },
            withCredentials: false,
        })
            .then(
                function (response) {
                    resolve(response.data);
                },
                function (res) {
                    if (res.response.status == 400 || res.response.status == 401 || res.response.status == 404 || res.response.status == 500) {
                        router.replace('/err');
                    }
                    reject(res);
                }).catch((error) => {
                    reject(error);
                });
    })
}


export default {
    get: function (url, params) {
        return apiAxios('GET', url, params)
    },
    post: function (url, params) {
        return apiAxios('POST', url, params)
    },

}
