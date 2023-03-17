import request from "@/utils/request";

// 获取歌单所有歌曲
export function getAllList(id) {
  return request.get(`/playlist/track/all?id=${id}&limit=10&offset=0`)
}
// 根据歌单id获取歌单详情
export function getPlayListDetail(id) {
  // const url = '/playlist/detail?id=' + id
  return request.get(`/playlist/detail?id=${id}`)
}
// 对播放量进行处理
export function changeCount(num) {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '亿'
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万'
  }
}

// 获取歌词
export function getSongLyric(id) {
  // const url = '/playlist/detail?id=' + id
  return request.get(`/lyric?id=${id}`)
}

