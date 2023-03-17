<template>
  <TopSwiper></TopSwiper>
  <IconList></IconList>
  <PlayList></PlayList>
</template>

<script>
import TopSwiper from './find/TopSwiper.vue'
import IconList from '@/components/find/IconList.vue'
import PlayList from './find/PlayList.vue'
export default {
  name: 'MyFind',
  components: {
    TopSwiper,
    IconList,
    PlayList
  }
}
</script>

<style>
</style>