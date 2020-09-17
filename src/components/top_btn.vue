<template>
    <div id="home_btn" @click="go_path">
      {{this.text}}
    </div>
</template>

<script>
  export default {
    name: 'home_btn',
    props:['text','path'],
    methods:
      {
        go_path()
        {
          this.$router.push(this.path);
        }
      }
  }
</script>

<style scoped>
  #home_btn
  {
    width: 100px;
    height: 60px;
    background: transparent;
    border-radius: 20px;
    font: normal 18px 黑体;
    color: #000ccc;

    line-height: 60px; text-align: center;

    cursor: pointer;
    float: left;
  }


  #home_btn:hover:before
  {
    content: "[";
  }
  #home_btn:hover:after
  {
    content: "]";
  }
</style>
