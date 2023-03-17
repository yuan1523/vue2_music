import { createStore } from 'vuex'
import { getSongLyric } from '@/api/playListDetail'

export default createStore({
  state: {
    playList: [{ //播放列表
      al: {
        id: 89039055,
        name: "雨爱抖音版",
        pic: 109951164966568500,
        picUrl: "https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg",
        pic_str: "109951164966568495"
      },
      id: 1446137141,
      name: "雨爱（抖音版）",
      ar: [{ name: "灏灏灏仔" }]
    }],
    playListIndex: 0, //默认下标为0
    isbtnShow: true, //暂停按钮的显示
    detailShow: false,//显示歌词弹出层
    lyricList: {},//歌词
    currentTime: 0,//当前时间
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow(state, value) {
      state.isbtnShow = value
    },
    updatePlayList(state, value) {
      state.playList = value
      // console.log(state.playList);
    },
    updatePlayListIndex(state, value) {
      state.playListIndex = value
    },
    updateDetailShow(state) {
      state.detailShow = !state.detailShow
      console.log(state.detailShow);
    },
    updateLyric(state, value) {
      state.lyricList = value
      // console.log(state.lyricList.lyric);
    },
    updateCurrentTime(state, value) {
      state.currentTime = value
      // console.log(state.currentTime);
    },
  },
  actions: {
    async getLyric(context, value) {
      const { data } = await getSongLyric(value)
      context.commit('updateLyric', data.lrc)
    }
  },
  modules: {
  }
})
