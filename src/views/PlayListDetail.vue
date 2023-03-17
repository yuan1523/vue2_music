<template>
  <TopDetail :playlist="state.playList" v-if="state.playList.creator"></TopDetail>
  <ListDetail :allList="state.allList" :subscribedCount="state.playList.subscribedCount" v-if="state.playList.subscribedCount"></ListDetail>
</template>

<script>
import { getPlayListDetail, getAllList } from '@/api/playListDetail.js'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import TopDetail from '@/components/playListDetail/TopDetail.vue'
import ListDetail from '@/components/playListDetail/ListDetail.vue'

export default {
  name: 'PlayListDetail',
  components: { TopDetail, ListDetail },
  setup() {
    const state = reactive({
      playList: {},
      allList: []
    })
    onMounted(async () => {
      let id = useRoute().query.id
      console.log(id)
      const { data } = await getPlayListDetail(id)
      state.playList = data.playlist
      // console.log(data.playlist)
      const result = await getAllList(id)
      state.allList = result.data.songs
      // console.log(result.data.songs)
    })
    return { state }
  }
}
</script>

<style>
</style>