<template>
  <img :src="songDetail.al.picUrl" alt="" class="bgimg">
  <div class="detailTop">
    <div class="leftTop">
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou" @click="updateDetailShow"></use>
      </svg>
      <div class="leftMarquee">
        <Vue3Marquee style="color:#fff"> {{songDetail.name }}</Vue3Marquee>
        <span v-for="ar in songDetail.ar" :key="ar.id">{{ ar.name }}</span>
        <svg class="icon liebiao" aria-hidden="true">
          <use xlink:href="#icon-youjiantou1"></use>
        </svg>
      </div>
    </div>
    <div class="rightTop">
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
  </div>
  <div class="detailContent" v-show="isLyricShow">
    <img src="@/assets/needle-ab.png" alt="" class="img_needle" :class="{img_needle_active:!isbtnShow}">
    <img src="@/assets/cd.png" alt="" class="img_cd">
    <img :src="songDetail.al.picUrl" alt="" class="img_ar" :class="{img_ar_active:!isbtnShow,img_ar_pauesd:isbtnShow}">
  </div>
  <div class="lyric">
    <p v-for="item in lyric" :key="item" :class="{active: currentTime*1000 >= item.time && currentTime*1000 < item.nextTime}">
      {{ item.lrc}}
    </p>
  </div>
  <div class="detailFooter">
    <div class="footerTop">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-aixin"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinlechangpian"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023110"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao-"></use>
      </svg>
    </div>
    <div class="footerContent">
      <!-- <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05"> -->
    </div>
    <div class="footer">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <svg class="icon bofang" aria-hidden="true" v-if="isbtnShow" @click="play">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg class="icon bofang" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'SongDetail',
  props: ['songDetail', 'isbtnShow', 'play'],
  components: {
    Vue3Marquee
  },
  data() {
    return {
      isLyricShow: false
    }
  },
  setup(props) {
    onMounted(() => {
      console.log(props)
    })
  },
  methods: {
    ...mapMutations(['updateDetailShow'])
  },
  computed: {
    ...mapState(['lyricList', 'currentTime']),
    lyric() {
      let arr
      if (this.lyricList.lyric) {
        arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          let min = item.slice(1, 3)
          let sec = item.slice(4, 6)
          let mill = item.slice(7, 10)
          let lrc = item.slice(11, item.length)
          let time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill)
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9)
            lrc = item.slice(10, item.length)
            time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill)
          }
          return { min, sec, mill, lrc, time }
        })
        arr.forEach((item, i) => {
          if (i === arr.length - 1) {
            item.nextTiem = 0
          }
          item.nextTime = arr[i + 1]?.time
        })
      }
      console.log(arr)
      return arr
    }
  }
}
</script>

<style lang="less" scoped>
.bgimg {
  width: 100%;
  height: 100%;
  filter: blur(1.8667rem);
  z-index: -1;
  position: absolute;
}
.detailTop {
  margin-top: 0.2667rem;
  width: 100%;
  height: 1.3333rem;
  padding: 0.2667rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  fill: #fff;
  .leftTop {
    display: flex;
    align-items: center;
    .icon {
      width: 0.9333rem;
      height: 0.9333rem;
    }
    .leftMarquee {
      width: 4rem;
      height: 100%;
      margin-left: 0.5333rem;
      font-size: 0.4533rem;
      span {
        color: #999;
        font-size: 0.4rem;
      }
      .icon {
        width: 0.4rem;
        height: 0.4rem;
        fill: #999;
        vertical-align: middle;
      }
    }
  }
  .rightTop {
    .icon {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
.detailContent {
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .img_needle {
    width: 2.6667rem;
    height: 4rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(-13deg);
    transition: all 2s;
  }
  .img_needle_active {
    width: 2.6667rem;
    height: 4rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(0deg);
    transition: all 2s;
  }

  .img_cd {
    width: 6.6667rem;
    height: 6.6667rem;
    position: absolute;
    bottom: 3.0667rem;
    z-index: -1;
  }
  .img_ar {
    width: 4.2667rem;
    height: 4.2667rem;
    border-radius: 50%;
    position: absolute;
    bottom: 4.1867rem;
    animation: rotate_ar 10s linear infinite;
  }
  .img_ar_active {
    animation-play-state: running;
  }
  .img_ar_pauesd {
    animation-play-state: paused;
  }
  @keyframes rotate_ar {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
}
.lyric {
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  p {
    color: rgb(190, 181, 181);
    margin-bottom: 0.4rem;
  }
  .active {
    color: #fff;
    font-size: 0.5333rem;
  }
}
.detailFooter {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0.2667rem;
  width: 100%;
  height: 4rem;
  // padding: .2667rem;
  .footerTop {
    width: 100%;
    height: 1.3333rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      fill: rgb(245, 234, 234);
      width: 0.8rem;
      height: 0.8rem;
    }
  }
  .footer {
    width: 100%;
    height: 1.3333rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      fill: rgb(245, 234, 234);
      width: 0.6667rem;
      height: 0.6667rem;
    }
    .bofang {
      width: 1.3333rem;
      height: 1.3333rem;
    }
  }
}
</style>