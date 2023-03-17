<template>
  <div class="topDetail">
    <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
    <div class="left">
      <svg class="icon" aria-hidden="true" @click="$router.back()">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
  </div>
  <div class="topContent">
    <div class="contentLeft">
      <img :src="playlist.coverImgUrl" alt="">
      <span class="playCount">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gl-play-copy"></use>
        </svg>
        {{ playCount}}
      </span>
    </div>
    <div class="contentRight">
      <p>{{playlist.name}}</p>
      <div class="right_img">
        <img :src="playlist.creator.backgroundUrl" alt="" />
        <span>{{ playlist.creator.nickname }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </div>
      <p class="rightP">
        <span>{{ playlist.description }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </p>
    </div>
  </div>
  <div class="topFooter">
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023110"></use>
      </svg>
      <span>{{ playlist.commentCount }}</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <span>{{ playlist.shareCount }}</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
      </svg>
      <span>下载</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-show_duoxuan"></use>
      </svg>
      <span>多选</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { changeCount } from '@/api/playListDetail.js'
export default {
  name: 'TopDetail',
  props: ['playlist'],
  setup(props) {
    let playCount = ref(changeCount(props.playlist.playCount))
    return {
      playCount
    }
  }
}
</script>

<style lang="less" scoped>
.topDetail {
  width: 100%;
  height: 1.3333rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0.2667rem;
  position: relative;
  .left,
  .right {
    width: 25%;
    height: 100%;
    margin: 0 0.2667rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.5333rem;
    color: #fff;
    .icon {
      fill: #fff; //填充颜色
    }
  }
  .bgimg {
    width: 100%;
    height: 14.6667rem;
    position: absolute;
    z-index: -1;
    filter: blur(0.8rem);
  }
}

.topContent {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 0.2667rem;
  margin-top: 0.4rem;

  .contentLeft {
    width: 36%;
    height: 3.4667rem;
    position: relative;
    .playCount {
      position: absolute;
      top: 0.1333rem;
      right: 0.1867rem;
      color: #fff;
      z-index: 100;
      font-size: 0.4rem;
      vertical-align: middle;
      .icon {
        vertical-align: middle;
        width: 0.4rem;
        height: 0.4rem;
      }
    }
    img {
      border-radius: 0.4rem;
      height: 3.4667rem;
      width: 100%;
      margin-bottom: 0.1333rem;
    }
  }
  .contentRight {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 0.4rem;
      font-weight: 900;
      color: #fff;
    }
    .right_img {
      width: 100%;
      height: 0.8rem;
      display: flex;
      line-height: 0.8rem;
      align-items: center;
      color: #ccc;
      img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 0.4rem;
        vertical-align: middle;
      }
      span {
        margin-left: 0.1333rem;
        font-size: 0.4rem;
      }
      .icon {
        width: 0.3467rem;
        height: 0.3467rem;
        vertical-align: middle;
      }
    }
    .rightP {
      width: 100%;
      height: 0.9333rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        width: 95%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.32rem;
        color: #ccc;
      }
      .icon {
        width: 0.32rem;
        height: 0.32rem;
      }
    }
  }
}
.topFooter {
  width: 100%;
  height: 1.3333rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.2667rem;
  .footerItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    .icon {
      fill: #fff;
    }
    span {
      margin-top: 0.1333rem;
      font-size: 0.4rem;
    }
  }
}
</style>