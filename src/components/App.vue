<style lang="less">
@import '../common/reset.less';

body {
  background-color: #f5f6f8;
  font-family: 'Helvetica Neue', Helvetica, STHeiTi, Arial, sans-serif;
  font-weight: 400;
}
#app {
  width: 100%;
}
</style>

<template>
  <div class="container">
    <MusicList></MusicList>
    <MusicList></MusicList>
    <MusicList></MusicList>
    <MusicList></MusicList>
    <MusicList></MusicList>
    <MusicList></MusicList>
    <MusicList></MusicList>
  </div>
</template>

<script>
import MusicList from './MusicList';

export default {
  components: {
    MusicList,
  }
};
</script>
