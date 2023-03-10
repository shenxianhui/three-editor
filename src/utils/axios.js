/*
 * @Author: shenxh
 * @Date: 2021-09-15 15:18:43
 * @LastEditors: shenxh
 * @LastEditTime: 2022-11-16 15:41:42
 * @Description: axios 封装
 */

import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API

const request = axios.create({})

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 请求之前
    return config
  },
  err => {
    // 请求错误
    console.log('服务器请求失败，请稍后再试')
    return Promise.reject(err)
  },
)

// 响应拦截
axios.interceptors.response.use(
  res => {
    // 响应之前
    return res
  },
  err => {
    // 响应错误
    console.log('服务器响应失败，请稍后再试')
    return Promise.reject(err)
  },
)

// 生成 axios 实例
const createAxios = apiList => {
  let service = {}

  apiList.forEach(item => {
    const { name, method } = item

    service[name] = (data = {}) => {
      let key = 'params'

      if (
        method.toLocaleLowerCase() === 'post' ||
        method.toLocaleLowerCase() === 'put'
      ) {
        key = 'data'
      }

      return request(
        Object.assign(item, {
          [key]: data,
        }),
      )
    }
  })

  return service
}

export { request as axios, createAxios }
