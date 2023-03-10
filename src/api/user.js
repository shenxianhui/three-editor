import { createAxios } from '../utils/axios'

const api = [
  {
    name: 'getUserInfo',
    url: '/user/get_user',
    method: 'get',
  },
  {
    name: 'login',
    url: '/user/login',
    method: 'post',
    headers: { 'X-Custom-Header': 'foobar' },
  },
]

export default createAxios(api)
