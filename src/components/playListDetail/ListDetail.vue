<template>
  <div class="listDetail">
    <div class="listTop">
      <div class="leftTop">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofanganniu"></use>
        </svg>
        <span>播放全部<span>(共{{ allList.length }}首)</span></span>
      </div>
      <div class="rightTop">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiahao"></use>
        </svg>
        <span>收藏({{ newSubscribedCount }})</span>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="(item,i) in allList" :key="item.id">
        <div class="itemLeft" @click="playMusic(i)">
          <span class="leftSpan">{{i + 1}}</span>
          <div>
            <p>{{item.name}}</p>
            <span v-for="ar in item.ar" :key="ar.id">{{ar.name}}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-31liebiao"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { changeCount } from '@/api/playListDetail.js'
import { mapMutations } from 'vuex'
export default {
  props: ['allList', 'subscribedCount'],
  name: 'ListDetail',
  setup(props) {
    let newSubscribedCount = ref(changeCount(props.subscribedCount))
    onMounted(() => {
      console.log(props)
    })
    return { newSubscribedCount }
  },
  methods: {
    ...mapMutations(['updatePlayList', 'updatePlayListIndex']),
    playMusic(i) {
      this.updatePlayList(this.allList)
      this.updatePlayListIndex(i)
    }
  }
}
</script>

<style lang="less" scoped>
.listDetail {
  width: 100%;
  border-top-left-radius: 0.5333rem;
  border-top-right-radius: 0.5333rem;
  background-color: #fff;
  margin-top: 0.4rem;
  padding: 0 0.2667rem;
  font-size: 0.4rem;
  .listTop {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1.3333rem;
    align-items: center;
    .leftTop {
      width: 3.8667rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        stroke: #333333;
        stroke-width: 20;
      }
      span {
        font-weight: 700;
        span {
          font-weight: 400;
          font-size: 0.32rem;
          color: #999;
        }
      }
    }
    .rightTop {
      display: flex;
      align-items: center;
      background-color: red;
      padding: 0.2667rem;
      border-radius: 0.5333rem;
      color: #fff;
      .icon {
        width: 0.4rem;
        height: 0.4rem;
        fill: #fff;
        margin-right: 0.1333rem;
        stroke: #fff;
        stroke-width: 50;
      }
    }
  }
  .list {
    width: 100%;
    margin-bottom: 1.8667rem;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 1.8667rem;
      .itemLeft {
        display: flex;
        align-items: center;
        width: 80%;
        height: 100%;
        .leftSpan {
          display: inline-block;
          width: 0.6667rem;
          // text-align: center;
        }
        div {
          p {
            width: 5.8667rem;
            height: 0.5333rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap; //控制不换行
            font-weight: 700;
          }
          span {
            font-weight: 400;
            font-size: 0.32rem;
            color: #999;
            margin-right: 0.2667rem;
          }
          // margin-left: 0.3rem;
        }
      }
      .itemRight {
        width: 20%;
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
        .icon {
          fill: #999;
        }
        .bofang {
          position: absolute;
          left: 0;
        }
        .liebiao {
          position: absolute;
          right: 0;
        }
      }
    }
  }
}
</style>