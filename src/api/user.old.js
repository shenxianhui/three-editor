import request from '../utils/axios'

// GET 示例
export const getUserInfo = params => {
  return request.get('/user/get_user', { params })
}

// POST 示例
export const login = params => {
  return request.post('/user/login', params)
}

// 创建实例
export const instance = params => {
  return request({
    url: '/user/get_user',
    method: 'get',
    headers: { 'X-Custom-Header': 'foobar' },
    params,
  })
}
