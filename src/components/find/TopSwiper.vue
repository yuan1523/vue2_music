<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render indicator-color="rgb(219, 130, 130)">
      <van-swipe-item v-for="item in state.images" :key="item.bannerId">
        <img :src="item.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import {getSwiper} from '@/api/find.js'
export default {
  setup() {
    const state= reactive({
      images:[
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
      ]
    })
    onMounted(async () => {
     const {data} = await getSwiper()
     state.images = data.banners
    })
    
    return { state }
  },
  
}
</script>

<style lang="less" scoped>
#swiperTop{
  .van-swipe{
    width: 100%;
    height: 3.8933rem;
    .van-swipe-item{
      padding: 0 .2667rem;
      img{
        width: 100%;
        height: 100%;
        border-radius: .4rem;
      }
    }
  }
}
</style>