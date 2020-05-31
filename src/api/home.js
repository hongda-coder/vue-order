import qs from 'qs'
// axios
import request from '@/utils/request'
//user api

// 登录
export function getGongGao() {
  return request({
    url: '/api/user/dbconn',
    method: 'get',
    // data: qs.stringify(params)
    hideloading:true
  })
}
export function getDoc() {
  return request({
    url: '/api/user/doc',
    method: 'get',
    // data: qs.stringify(params)
    hideloading:true
  })
}
