import request from "@/utils/request"

//请求轮播图数据
export function getSwiper() {
  return request.get('/banner?type=2')

}
// 请求歌单
export function getPlayList() {
  return request.get('/personalized?limit=7')
}

