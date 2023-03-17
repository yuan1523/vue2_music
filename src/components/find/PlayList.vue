<template>
  <div class="playList">
    <div class="playTop">
      <h3>发现好歌单</h3>
      <div class="more">查看更多</div>
    </div>

    <div class="playContent">
      <van-swipe :loop="false" :width="150" :show-indicators="false">
        <van-swipe-item v-for="item in state.playList" :key="item.id">
          <router-link :to="{path:'/playlistdetail',query:{id:item.id}}">
            <img :src="item.picUrl" alt="">
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gl-play-copy"></use>
              </svg>
              {{ changeCount(item.playCount )}}
            </span>
            <span>{{item.name}}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getPlayList } from '@/api/find.js'
import { onMounted, reactive } from 'vue'
export default {
  name: 'playList',
  setup() {
    let state = reactive({
      playList: []
    })
    onMounted(async () => {
      const { data } = await getPlayList()
      state.playList = data.result
      console.log(state.playList)
      // sessionStorage.getItem('playListDetail', JSON.stringify(state))
    })
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + '亿'
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + '万'
      }
    }
    return {
      state,
      changeCount
    }
  }
}
</script>

<style lang="less" scoped>
.playList {
  width: 100%;
  height: 6.6667rem;
  padding: 0.2667rem;
  margin-top: 0.1333rem;
  .playTop {
    width: 100%;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.2667rem;
    h3 {
      display: inline-block;
      font-size: 0.5333rem;
      font-weight: 900;
    }
    .more {
      width: 2.1333rem;
      border: 0.0267rem solid #ccc;
      text-align: center;
      line-height: 0.8rem;
      border-radius: 0.5333rem;
      font-size: 0.4rem;
    }
  }
  .playContent {
    width: 100%;
    height: 5.0667rem;
    .van-swipe-item {
      padding: 0 0.1333rem;
      font-size: 0.4rem;
      position: relative;
      .playCount {
        position: absolute;
        top: 0.1333rem;
        right: 0.1867rem;
        color: #fff;
        z-index: 100;
        .icon {
          vertical-align: middle;
          width: 0.4rem;
          height: 0.4rem;
        }
      }
      img {
        border-radius: 0.4rem;
        height: 3.7333rem;
        width: 100%;
        margin-bottom: 0.1333rem;
      }
    }
  }
}
</style>