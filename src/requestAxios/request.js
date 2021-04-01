/**
 * axios 封装  配合 element ui   
 **/ 

import axios from 'axios'
import { Message, Loading} from 'element-ui'

const error = () => {
    Message({
        type: 'error',
        message: '遇到错误，刷新试试',
        duration: 2 * 1000
    })
}

let loading

const startLoading = () => {
    loading = Loading.service({
        lock: true,
        text: '加载中...',
        backgroud: 'rgba(0,0,0,0.7)'
    })
}

const endLoading = () => {
    loading.close()
}

const service = axios.create({
    baseURL: ``,
    timeout: '5000'
})

// 请求拦截

service.interceptors.request.use(
    config => {
        startLoading();
        return config;
    },
    err => {
        endLoading();
        error();
        Promise.reject(err);
    }
)

// 响应拦截

service.interceptors.response.use(
    response => {
        endLoading();
        return response.data;
    },
    err => {
        endLoading();
        error();
        return Promise.reject(err);
    }
)

export default service;