import { request } from './request'

// 获取轮播图数据
export function getSlideList () {
  return request({
    url: '/banner'
  })
}

// 获取推荐歌单
export function getHotPlayList () {
  return request({
    url: '/personalized',
    params: {
      limit: 16
    }
  })
}

// 获取排行榜数据
export function getRankList () {
  return request({
    url: '/toplist'
  })
}

// 获取歌单详情
export function getSongList (id) {
  return request({
    url: '/playlist/detail',
    params: {
      id: id
    }
  })
}
