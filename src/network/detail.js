import { request } from './request'

// 获取歌单详情
export function getSongList (id) {
  return request({
    url: '/playlist/detail',
    params: {
      id: id
    }
  })
}
