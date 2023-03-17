<template>
  <router-view></router-view>
  <FooterMusic></FooterMusic>
</template>

<script>
import FooterMusic from '@/components/FooterMusic.vue'
export default {
  name: 'App',
  components: { FooterMusic }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: 0.5867rem;
  vertical-align: center;
}
a {
  color: black;
}
</style>

