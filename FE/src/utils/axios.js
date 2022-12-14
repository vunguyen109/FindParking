import axios from 'axios'
import router from '@/router/index'
import Vue from 'vue';
function apiAxios(method, url, params) {

    const uri = 'http://localhost:3000/'

    return new Promise((resolve, reject) => {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios({
            method: method,
            url: uri + url,
            data:  method === 'POST' ? params : null,
            params: method === 'GET' ? params : null,
            headers: {},
            withCredentials: false,
        })
            .then(
                function (response) {
                    resolve(response.data);
                },
                // function (res) {
                //     if (res.response.status == 400 || res.response.status == 401 || res.response.status == 404 || res.response.status == 500) {
                //         router.replace('/err');
                //     }
                //     reject(res);
                // }
                ).catch((error) => {
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
