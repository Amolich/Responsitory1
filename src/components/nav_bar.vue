<template>
    <div id = "nav_bar">
      <div id="left">
        <top_btn :text="'首页'" :path="'/home'"></top_btn>
      </div>
      <div id="right">
        <weather></weather>
      </div>
    </div>
</template>

<script>
  import top_btn from './top_btn'
  import weather from './weather'
  export default {
    name: 'nav_bar',
    components:{top_btn,weather}
  }
</script>

<style scoped>
  #nav_bar
  {
    width: 101%; height: 60px;
    box-shadow:0px 2px 1px #000;
    margin: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: translate(-7px,0);
  }
  #left
  {
    margin: 20px;
  }
  #right
  {
    margin: 20px;
  }
</style>
