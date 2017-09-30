<style lang="less" scoped>
.music-box {
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
  padding-bottom: 42px;
}

.music-title {
  position: relative;
  width: 100%;
  height: 110px;
  box-sizing: border-box;
  padding-left: 30px;
  line-height: 110px;
}

.music-text {
  font-size: 36px;/*px*/
  color: #000;
}

.music-btn {
  position: absolute;
  top: 0;
  right: 30px;
  height: 110px;
  line-height: 110px;
  font-size: 32px;/*px*/
  color: #009FFF;
}

.music-list {
  width: 100%;

  &:after {
    content: '';
    clear: both;
    display: block
  }
}

.music-item {
  float: left;
  width: 248px;

  &.first {
    margin-right: 3px;
  }
  &.last {
    float: right;
    margin-right: 0;
  }
}

.music-item-title {
  width: 100%;
  height: 76px;/*px*/
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 28px;/*px*/
  color: #000;
  line-height: 38px;/*px*/
  overflow: hidden;
  box-sizing: border-box;
}

.music-img {
  position: relative;
  width: 248px;
  height: 248px;
  background-image: url('//gw.alicdn.com/imgextra/i2/376064942/TB27Fk7fW8lpuFjy0FpXXaGrpXa_!!376064942.jpg_500x500q75s150.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ddd;
}

.music-icon {
  display: block;
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 46px;
  height: 46px;
  background-image: data-uri('../assets/video-icon.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
  <div class="music-box">
    <div class="music-title">
      <p class="music-text">“我想听，热门歌单”</p>
      <div class="music-btn">显示全部</div>
    </div>
    <div class="music-list">
      <div class="music-item first">
        <div class="music-img">
          <i class="music-icon first"></i>
        </div>
        <div class="music-item-title">同名不同调的欧美热歌大盘点同名不同调的欧美热歌大盘点</div>
      </div>
      <div class="music-item">
        <div class="music-img">
          <i class="music-icon"></i>
        </div>
        <div class="music-item-title">同名不同调的欧美热歌大盘点同名不同调的欧美热歌大盘点</div>
      </div>
      <div class="music-item last">
        <div class="music-img">
          <i class="music-icon"></i>
        </div>
        <div class="music-item-title">同名不同调的欧美热歌大盘点同名不同调的欧美热歌大盘点</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>
