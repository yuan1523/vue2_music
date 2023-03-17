<template>
  <div class="footerMusic">
    <div class="footerLeft" @click="updateDetailShow">
      <van-popup v-model:show="detailShow" position="bottom" :style="{ height: '100%' }">
        <SongDetail :songDetail="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow"></SongDetail>
      </van-popup>

      <img :src="playList[playListIndex].al.picUrl" alt="">
      <div>
        <p>{{ playList[playListIndex].name }}</p>
        <span>横滑切换上下首喔</span>
      </div>
    </div>
    <div class="footRight">
      <svg class="icon liebiao" aria-hidden="true" @click="play" v-if="isbtnShow">
        <use xlink:href="#icon-bofanganniu"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-weibiaoti--"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
    <audio :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3` " ref="audio" @timeupdate="timeUpdate"></audio>
  </div>
</template>

<script>
import { ref } from 'vue'
import { mapMutations, mapState } from 'vuex'
import SongDetail from '@/components/SongDetail.vue'
export default {
  name: 'FooterMusic',
  components: {
    SongDetail
  },
  setup() {
    const isPause = ref(true)
    // const audio = ref()
    // function play(audio) {
    //   audio.play()
    //   isPause = false
    // }
    // function pause(audio) {
    //   audio.pause()
    //   isPause = true
    // }
    return { isPause }
  },
  methods: {
    play() {
      // console.log(this.audio)

      // this.$refs.audio.play()
      // this.isPause = false
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.updateIsbtnShow(false)
      } else {
        this.$refs.audio.pause()
        this.updateIsbtnShow(true)
      }
    },
    timeUpdate() {
      this.updateCurrentTime(this.$refs.audio.currentTime)
    },
    // pause() {
    //   this.$refs.audio.pause()
    //   this.isPause = true
    // },
    // 借助mapMutations生成对应的方法，方法中会自动调用commit去联系Mutations
    ...mapMutations(['updateIsbtnShow', 'updateDetailShow', 'updateCurrentTime'])
  },
  computed: {
    ...mapState(['playList', 'playListIndex', 'isbtnShow', 'detailShow'])
  },
  watch: {
    playListIndex() {
      // 监听如果播放列表索引如果发生改变，则自动播放音乐
      this.$refs.audio.autoplay = true
      if (this.$refs.audio.paused) {
        // 如果是暂停状态，则改变图标
        this.updateIsbtnShow(false)
      }
    },
    playList() {
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true
        this.updateIsbtnShow(false)
      }
    }
  },
  updated() {
    this.$store.dispatch('getLyric', this.playList[this.playListIndex].id)
  }
}
</script>

<style lang="less" scoped>
.footerMusic {
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  bottom: 0;
  padding: 0.2667rem;
  border-top: 1px solid #999;
  width: 100%;
  height: 1.8667rem;
  font-size: 0.4rem;
  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      width: 1.3333rem;
      height: 1.3333rem;
      border-radius: 50%;
    }
  }
  .footRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      vertical-align: middle;
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
</style>