import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Find from '@/components/Find.vue'
import Country from '@/components/Country.vue'
import Video from '@/components/Video.vue'
import PlayListDetail from '@/views/PlayListDetail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/find',
      children: [
        { path: 'find', component: Find },
        // { path: '/:id', component: Country },
        { path: 'country', component: Country },
        { path: 'video', component: Video },
      ]
    },
    { path: '/playlistdetail', component: PlayListDetail }


  ]
})
export default router